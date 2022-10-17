import AuthenticatedScreen from 'app/components/AuthenticatedScreen'
import { userContext } from 'app/context/user-context/user-context'
import { View, Text } from 'dripsy'
import { useContext } from 'react'
import { TextLink } from 'solito/link'

export function UserDetailScreen() {
  const { user } = useContext(userContext);

  return (
    <AuthenticatedScreen>
      {user &&
        <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
          >
            Welcome {user.displayName}!
          </Text>

          <TextLink href="/">👈 Go Home</TextLink>
        </View>}
    </AuthenticatedScreen>
  )
}
