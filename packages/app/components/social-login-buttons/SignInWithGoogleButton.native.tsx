import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native';

GoogleSignin.configure({
  webClientId: '942378150104-53jg5o438befqeribslroc8r94d2fhue.apps.googleusercontent.com',
});

export default function SignInWithGoogleButton() {

  const onPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <Button
      title="Sign in with Google"
      onPress={onPress}
      color="blue"
    />
  )
}