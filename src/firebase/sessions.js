import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from './client';

function requireDb() {
  if (!db) throw new Error('Firebase is not configured.');
  return db;
}

export async function logSession(uid, session) {
  const database = requireDb();
  const ref = collection(database, 'users', uid, 'sessions');
  const happenedAt =
    session.happenedAt instanceof Date
      ? Timestamp.fromDate(session.happenedAt)
      : serverTimestamp();

  const docRef = await addDoc(ref, {
    type: session.type,
    durationMinutes: Number(session.durationMinutes || 0),
    notes: session.notes ?? null,
    happenedAt,
    createdAt: serverTimestamp()
  });
  return docRef.id;
}

export function subscribeSessions(uid, onChange, onError) {
  const database = requireDb();
  const ref = collection(database, 'users', uid, 'sessions');
  const q = query(ref, orderBy('happenedAt', 'desc'));
  return onSnapshot(
    q,
    (snap) => onChange(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => onError?.(err)
  );
}

