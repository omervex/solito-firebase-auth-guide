
import SignInWithGoogleButton from 'app/components/social-login-buttons/SignInWithGoogleButton'
import { userContext } from 'app/context/user-context/user-context'
import { Text, useSx, View, H1, P, Row, A, ActivityIndicator } from 'dripsy'
import { useContext } from 'react'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import Ionicons from '@expo/vector-icons/Ionicons'

export function HomeScreen() {
  const sx = useSx()
  const { user, userInitialized } = useContext(userContext);

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800', textAlign: 'center' }}>
        Welcome to Solito + Firebase auth.
      </H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>

        <P sx={{ textAlign: 'center' }}>
          The user profile is a protected route, available only for signed in users.
        </P>

        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>

      <View sx={{ height: 20 }} />

      <Row>
        <TextLink
          href="/user"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          User Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            User Moti Link
          </Text>
        </MotiLink>
      </Row>

      <View sx={{ height: 40 }} />

      {!userInitialized && (
        <ActivityIndicator
          color="gray"
          size="large"
        />
      )}

      {userInitialized && user && (
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="checkmark-circle" size={20} color="green" />
          <Text sx={{ fontSize: 16, color: 'black', fontWeight: 'bold', }}>
            Signed in as {user.displayName}
          </Text>
        </View>

      )}

      {userInitialized && !user && (
        <>
          <SignInWithGoogleButton />
          <Text sx={{
            fontSize: 14,
            color: 'black',
            marginY: 10,
            textAlign: 'center'
          }}>
            Try visiting the user link{'\n'}without authenticating first.
          </Text>
        </>
      )}

    </View >
  )
}
