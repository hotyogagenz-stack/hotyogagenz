import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './client';

function requireDb() {
  if (!db) throw new Error('Firebase is not configured.');
  return db;
}

export async function ensureUserProfile(user, extra = {}) {
  if (!user?.uid) throw new Error('Missing user.');

  const database = requireDb();
  const ref = doc(database, 'users', user.uid);
  const snap = await getDoc(ref);

  const base = {
    uid: user.uid,
    email: user.email ?? null,
    displayName: user.displayName ?? null,
    photoURL: user.photoURL ?? null,
    updatedAt: serverTimestamp(),
    ...extra
  };

  if (!snap.exists()) {
    await setDoc(ref, {
      ...base,
      createdAt: serverTimestamp(),
      stats: {
        totalSessions: 0,
        totalMinutes: 0
      },
      currentPlanId: null
    });
    return;
  }

  await setDoc(ref, base, { merge: true });
}

export function subscribeUserProfile(uid, onChange, onError) {
  const database = requireDb();
  const ref = doc(database, 'users', uid);
  return onSnapshot(
    ref,
    (snap) => onChange(snap.exists() ? snap.data() : null),
    (err) => onError?.(err)
  );
}

