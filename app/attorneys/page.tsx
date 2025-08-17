'use client';

import { useEffect, useMemo, useState } from 'react';

type Attorney = {
  name: string;
  title?: string;
  email?: string;
  location?: string;
  practice_areas?: string[];
  keywords?: string[];
  photo?: string;
  photoAlt?: string;
  profile_url?: string;
};

const FALLBACK: Attorney[] = [
  {
    name: 'Jane Smith',
    title: 'Partner, Employment Litigation',
    email: 'jane.smith@ascentlegal.io',
    location: 'Los Angeles, CA',
    practice_areas: ['Employment', 'Wage & Hour', 'Class Actions'],
    keywords: ['Spanish', 'trial', 'wage', 'PAGA'],
    photo: '/attorneys/headshots/placeholder.jpg',
    photoAlt: 'Jane Smith, Partner',
    profile_url: '/attorneys/jane-smith',
  },
  {
    name: 'Michael Chen',
    title: 'Senior Associate, Complex Litigation',
    email: 'michael.chen@ascentlegal.io',
    location: 'San Diego, CA',
    practice_areas: ['Discrimination', 'Retaliation', 'Harassment'],
    keywords: ['mediation', 'FEHA'],
    photo: '/attorneys/headshots/placeholder.jpg',
    photoAlt: 'Michael Chen, Senior Associate',
    profile_url: '/attorneys/michael-chen',
  },
];

export default function AttorneysPage() {
  const [list, setList] = useState<Attorney[]>([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch('/attorneys/data/attorneys.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('not ok');
        const data: Attorney[] = await res.json();
        if (isMounted) setList(Array.isArray(data) ? data : FALLBACK);
      } catch {
        if (isMounted) setList(FALLBACK);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const needle = q.toLowerCase().trim();
    if (!needle) return list;
    return list.filter((a) => {
      const bag = [
        a.name,
        a.title,
        a.location,
        ...(a.practice_areas ?? []),
        ...(a.keywords ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return bag.includes(needle);
    });
  }, [q, list]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Our Attorneys</h1>
        <p className="text-slate-500 mt-1">Meet the team representing our clients.</p>

        <div className="mt-5">
          <label className="sr-only" htmlFor="search">
            Search attorneys
          </label>
          <input
            id="search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, practice area, or location…"
            className="w-full md:w-[720px] rounded-xl border border-slate-200 bg-white/50 px-4 py-3 shadow-sm outline-none
                       focus:ring-2 focus:ring-blue-500/60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </header>

      <section
        aria-live="polite"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.length === 0 ? (
          <p className="text-slate-500 col-span-full">No attorneys match your search.</p>
        ) : (
          filtered.map((a) => (
            <article
              key={a.email ?? a.name}
              className="grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm
                         transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/60"
            >
              {/* Avatar */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.photo || '/attorneys/headshots/placeholder.jpg'}
                alt={a.photoAlt || `${a.name} headshot`}
                className="h-22 w-22 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
              />

              <div>
                <h2 className="text-lg font-medium">{a.name}</h2>
                <p className="text-sm text-slate-500">
                  {a.title || 'Attorney'}
                  {a.location ? <span> • {a.location}</span> : null}
                </p>

                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {a.practice_areas && a.practice_areas.length > 0
                    ? a.practice_areas.join(' • ')
                    : '—'}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {a.email && (
                    <a
                      href={`mailto:${a.email}`}
                      className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-sm
                                 text-slate-800 hover:border-blue-500 hover:text-blue-600
                                 dark:border-slate-600 dark:text-slate-100"
                    >
                      Email
                    </a>
                  )}
                  {a.profile_url && (
                    <a
                      href={a.profile_url}
                      className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-sm
                                 text-slate-800 hover:border-blue-500 hover:text-blue-600
                                 dark:border-slate-600 dark:text-slate-100"
                    >
                      View Profile
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
