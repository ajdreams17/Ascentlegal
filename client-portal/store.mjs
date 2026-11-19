import { DatabaseSync } from 'node:sqlite';

export function openStore(path) {
  const db = new DatabaseSync(path);
  db.exec(`
    PRAGMA busy_timeout = 5000;
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS matters (
      id TEXT PRIMARY KEY, label TEXT NOT NULL, folder TEXT UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS grants (
      id TEXT PRIMARY KEY, email TEXT NOT NULL, matter TEXT NOT NULL REFERENCES matters(id),
      active INTEGER NOT NULL DEFAULT 1, UNIQUE(email, matter)
    );
    CREATE TABLE IF NOT EXISTS challenges (
      id TEXT PRIMARY KEY, email TEXT NOT NULL, code TEXT NOT NULL,
      until INTEGER NOT NULL, attempts INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY, email TEXT NOT NULL, until INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS limits (
      key TEXT PRIMARY KEY, until INTEGER NOT NULL, count INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS receipts (
      id TEXT PRIMARY KEY, grant_id TEXT NOT NULL REFERENCES grants(id),
      digest TEXT NOT NULL, name TEXT NOT NULL, size INTEGER NOT NULL,
      drive_id TEXT NOT NULL, created INTEGER NOT NULL, saved INTEGER,
      notified INTEGER, notice_attempts INTEGER NOT NULL DEFAULT 0,
      notice_retry INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX IF NOT EXISTS grants_by_email ON grants(email, active);
    CREATE INDEX IF NOT EXISTS notices ON receipts(notified, notice_retry) WHERE saved IS NOT NULL;
  `);
  return db;
}
