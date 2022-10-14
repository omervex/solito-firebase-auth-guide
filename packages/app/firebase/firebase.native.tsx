import auth, {
  FirebaseAuthTypes
} from '@react-native-firebase/auth';

const onAuthStateChanged = (callback: (user: FirebaseAuthTypes.User) => void) => {
  return auth().onAuthStateChanged(callback);
}

const signInAnonymously = async () => await auth().signInAnonymously();

export {
  onAuthStateChanged,
  signInAnonymously,
}