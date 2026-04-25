# Firebase Setup

This app uses Firebase Authentication + Firestore for:

- `Join` (email/password sign up)
- `Login` (email/password sign in)
- `Dashboard` (user profile, plans, practice sessions)

## 1) Create Firebase Project

1. Firebase console -> create a project
2. Authentication -> Sign-in method -> enable `Email/Password`
3. Firestore Database -> create database (start in test mode for quick local dev, then lock it down)

## 2) Add Environment Variables

Create `hotyogagenz/.env` using `hotyogagenz/.env.example`:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

If these are missing, the site still runs, but auth/data operations show a helpful warning.

## 3) Firestore Data Model

- `users/{uid}`
  - `displayName`, `email`, `createdAt`, `updatedAt`, `currentPlanId`, `stats`
- `users/{uid}/plans/{planId}`
  - `title`, `goal`, `status`, `createdAt`, `updatedAt`
- `users/{uid}/sessions/{sessionId}`
  - `type`, `durationMinutes`, `notes`, `happenedAt`, `createdAt`

## 4) Security Rules

Baseline rules are in `hotyogagenz/firestore.rules`.

They allow each signed-in user to read/write only:

- their own `users/{uid}` document
- their own `plans` + `sessions` subcollections

