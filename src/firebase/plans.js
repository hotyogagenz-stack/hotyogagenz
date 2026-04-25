import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './client';

function requireDb() {
  if (!db) throw new Error('Firebase is not configured.');
  return db;
}

export async function createPlan(uid, plan) {
  const database = requireDb();
  const ref = collection(database, 'users', uid, 'plans');
  const docRef = await addDoc(ref, {
    title: plan.title,
    goal: plan.goal ?? null,
    status: plan.status ?? 'active',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
}

export function subscribePlans(uid, onChange, onError) {
  const database = requireDb();
  const ref = collection(database, 'users', uid, 'plans');
  const q = query(ref, orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snap) => onChange(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => onError?.(err)
  );
}

