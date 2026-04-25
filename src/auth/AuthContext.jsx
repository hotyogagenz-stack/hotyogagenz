import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../firebase/client';
import { ensureUserProfile } from '../firebase/profile';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setUser(null);
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const api = useMemo(() => {
    async function signIn({ email, password, remember = true }) {
      if (!auth) throw new Error('Firebase is not configured.');
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await ensureUserProfile(cred.user);
      return cred.user;
    }

    async function signUp({ email, password, displayName }) {
      if (!auth) throw new Error('Firebase is not configured.');
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(cred.user, { displayName });
      }
      await ensureUserProfile(cred.user, { displayName: displayName ?? null });
      return cred.user;
    }

    async function resetPassword(email) {
      if (!auth) throw new Error('Firebase is not configured.');
      await sendPasswordResetEmail(auth, email);
    }

    async function signOutUser() {
      if (!auth) return;
      await firebaseSignOut(auth);
    }

    return {
      isConfigured: isFirebaseConfigured,
      user,
      loading,
      signIn,
      signUp,
      resetPassword,
      signOutUser
    };
  }, [user, loading]);

  return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used within <AuthProvider />');
  return value;
}

