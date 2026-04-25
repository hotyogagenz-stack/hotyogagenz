June Flint Wellness (Vite + React)

## Firebase Auth + Dashboard

Routes:

- `/join` create account (Firebase Auth)
- `/login` sign in (Firebase Auth)
- `/dashboard` protected page (Firestore-backed plans + practice sessions)

Quick start:

1. Install dependencies

```bash
npm install
```

2. Configure Firebase

- Create `hotyogagenz/.env` from `hotyogagenz/.env.example`
- Setup steps: `hotyogagenz/docs/FIREBASE.md`

3. Run dev server

```bash
npm run dev
```

If Firebase env vars are missing, the app still runs but auth actions will show a configuration warning.
