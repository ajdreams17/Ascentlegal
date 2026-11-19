const get = (id) => document.getElementById(id);
const status = get('status');
const fileInput = get('document');
let pendingUpload;

function show(message, error = false) {
  status.textContent = message;
  status.classList.toggle('error', error);
}

async function api(path, { json, body, headers, post = false } = {}) {
  const response = await fetch('/api/' + path, {
    method: post || json !== undefined || body !== undefined ? 'POST' : 'GET',
    headers: json === undefined ? headers : { 'Content-Type': 'application/json' },
    body: json === undefined ? body : JSON.stringify(json),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error ?? 'The portal could not complete your request.');
  return data;
}

function form(id, callback) {
  get(id).addEventListener('submit', async (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    const button = element.querySelector('button');
    const fields = Object.fromEntries(new FormData(element));
    button.disabled = true;
    try {
      await callback(fields, element);
    } catch (error) {
      show(error.message, true);
    } finally {
      button.disabled = false;
    }
  });
}

function fillMatters(id, options) {
  const select = get(id);
  const previous = select.value;
  select.replaceChildren(...options.map(({ id, label }) => new Option(label, id)));
  if (!options.length) {
    select.append(new Option('No matters available', ''));
  } else if (id === 'invite-matter' || options.length > 1) {
    select.prepend(new Option('Select a matter', ''));
    select.value = options.some((matter) => matter.id === previous) ? previous : '';
  }
}

function emptyRow(text) {
  const item = document.createElement('li');
  item.textContent = text;
  return item;
}

async function staffDashboard() {
  const { matters, grants, receipts } = await api('staff');
  fillMatters('invite-matter', matters);
  get('invite-form').querySelector('button').disabled = !matters.length;
  const grantRows = grants.map(({ id, email, label }) => {
    const item = document.createElement('li');
    const description = document.createElement('span');
    description.textContent = email + ' · ' + label;
    const revoke = document.createElement('button');
    revoke.type = 'button';
    revoke.className = 'secondary';
    revoke.textContent = 'Revoke';
    revoke.setAttribute('aria-label', 'Revoke access for ' + email + ' to ' + label);
    revoke.addEventListener('click', async () => {
      if (!window.confirm('Revoke access for ' + email + ' to ' + label + '?')) return;
      revoke.disabled = true;
      try {
        await api('staff/revoke', { json: { grant: id } });
        await staffDashboard();
        show('Client access revoked.');
      } catch (error) {
        show(error.message, true);
        revoke.disabled = false;
      }
    });
    item.append(description, revoke);
    return item;
  });
  get('grants').replaceChildren(...(grantRows.length ? grantRows : [emptyRow('No active invitations.')]));
  const receiptRows = receipts.map(({ name, label, email, saved, notified }) =>
    emptyRow(name + ' · ' + label + ' · ' + email + ' · ' + new Date(saved).toLocaleString() +
      (notified ? '' : ' · Email alert pending')));
  get('receipts').replaceChildren(...(receiptRows.length ? receiptRows : [emptyRow('No uploads yet.')]));
}

async function refresh() {
  const { email, staff, matters } = await api('session');
  get('signin').hidden = Boolean(email);
  get('logout').hidden = !email;
  get('client').hidden = !email || (staff && !matters.length);
  get('staff').hidden = !staff;
  get('page-title').textContent = staff ? 'Manage client uploads' : 'Send documents to Ascent Legal';
  get('signed-in').textContent = matters.length ? 'Signed in as ' + email : 'No matter is currently available for uploads. Contact Ascent Legal for access.';
  get('upload-form').hidden = !matters.length;
  fillMatters('matters', matters);
  if (staff) await staffDashboard();
}

form('email-form', async ({ email }) => {
  await api('code', { json: { email } });
  get('email-form').hidden = true;
  get('code-form').hidden = false;
  get('email-help').textContent = 'If this email has portal access, you’ll receive a code shortly.';
  get('code').focus();
  show('');
});

get('change-email').addEventListener('click', () => {
  get('code-form').reset();
  get('code-form').hidden = true;
  get('email-form').hidden = false;
  get('email-help').textContent = 'Use the email address where you received your invitation. We’ll send you a one-time code.';
  get('login-email').focus();
  show('');
});

form('code-form', async ({ code }, element) => {
  await api('verify', { json: { code } });
  element.reset();
  get('change-email').click();
  await refresh();
  get('page-title').focus();
});

form('upload-form', async ({ matter }, element) => {
  const file = fileInput.files[0];
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) throw new Error('Choose a file no larger than 20 MB.');
  if (!file.size) throw new Error('Choose a file that isn’t empty.');
  if (pendingUpload?.file !== file || pendingUpload.matter !== matter) {
    pendingUpload = { file, matter, id: crypto.randomUUID() };
  }
  get('upload-receipt').hidden = true;
  show('Uploading and checking your document…');
  const { receipt, name } = await api('upload', {
    body: file,
    headers: {
      'Content-Type': 'application/octet-stream', 'X-Matter': matter,
      'X-File-Name': encodeURIComponent(file.name), 'X-Upload-Id': pendingUpload.id,
    },
  });
  const confirmation = get('upload-receipt');
  confirmation.textContent = 'Upload received · ' + name + ' · Receipt ' + receipt;
  confirmation.hidden = false;
  show('Your document was saved.');
  pendingUpload = undefined;
  element.reset();
});

form('matter-form', async (data, element) => {
  await api('staff/matters', { json: data });
  element.reset();
  await staffDashboard();
  show('Matter added.');
});

form('invite-form', async (data, element) => {
  const result = await api('staff/invite', { json: data });
  if (!result.pending) element.reset();
  await staffDashboard();
  show(result.pending ? 'Access was granted, but the invitation email couldn’t be sent. Submit again to resend.' : 'Invitation sent.', result.pending);
});

get('logout').addEventListener('click', async () => {
  try {
    await api('logout', { post: true });
    window.location.replace('/');
  } catch (error) {
    show(error.message, true);
  }
});

refresh().catch((error) => show(error.message, true));
