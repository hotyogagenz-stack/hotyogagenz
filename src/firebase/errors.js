export function getFirebaseErrorMessage(error) {
  if (!error) return 'Something went wrong. Please try again.';

  // Firebase errors usually come with `code` like "auth/invalid-email"
  const code = typeof error.code === 'string' ? error.code : '';

  switch (code) {
    case 'auth/invalid-email':
      return 'That email address looks invalid.';
    case 'auth/user-disabled':
      return 'This account is disabled. Please contact support.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password.';
    case 'auth/email-already-in-use':
      return 'That email is already in use. Try signing in instead.';
    case 'auth/weak-password':
      return 'Password is too weak. Please use at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait a bit and try again.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection and try again.';
    case 'permission-denied':
      return 'Permission denied. Check your Firestore security rules.';
    default:
      break;
  }

  if (error?.message) return String(error.message);
  return 'Something went wrong. Please try again.';
}

