import auth, {
  FirebaseAuthTypes,
} from '@react-native-firebase/auth';

const onAuthStateChanged = (listener: FirebaseAuthTypes.AuthListenerCallback) => {
  return auth().onAuthStateChanged(listener);
}

export {
  onAuthStateChanged,
}