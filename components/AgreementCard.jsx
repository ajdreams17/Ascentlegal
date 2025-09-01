'use client';

import { useState } from 'react';

export default function AgreementCard({ title, blurb }) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(blurb);

  return (
    <li>
      {/* thin gradient rim */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-teal-400/20">
        {/* the card */}
        <button
          type="button"
          onClick={() => expandable && setOpen(v => !v)}
          className="
            w-full rounded-2xl bg-white
            px-4 py-4 sm:px-5 sm:py-4
            text-left
            shadow-[0_1px_0_0_rgba(0,0,0,0.04)]
            hover:shadow-sm active:scale-[0.99]
            transition-all
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40
          "
          aria-expanded={expandable ? open : undefined}
        >
          <div className="flex items-center gap-3">
            {/* colorful dot */}
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400"
            />
            <span className="flex-1 font-medium text-gray-900 text-[15px] leading-tight">
              {title}
            </span>

            {/* chevron only when expandable */}
            {expandable && (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`h-4 w-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.94 1.16l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.39a.75.75 0 01.02-1.18z"
                />
              </svg>
            )}
          </div>

          {expandable && open && (
            <p className="mt-2 pl-5 text-sm text-gray-600">{blurb}</p>
          )}
        </button>
      </div>
    </li>
  );
}
