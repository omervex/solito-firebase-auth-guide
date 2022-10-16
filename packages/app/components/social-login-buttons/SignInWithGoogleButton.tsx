
import { Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../firebase/firebase';

WebBrowser.maybeCompleteAuthSession();

export default function SignInWithGoogleButton() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '942378150104-jgk19kp5tcihnr7rjtnq3k69spahpfch.apps.googleusercontent.com',
    },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  const onPress = async () => {
    promptAsync();
  }

  return (
    <Button
      title="Sign in with Google"
      onPress={onPress}
      color="blue"
      disabled={!request}
    />
  )
}