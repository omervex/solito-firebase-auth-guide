import { userContext } from "app/context/user-context/user-context"
import { useContext } from "react"
import { View, P, ActivityIndicator } from 'dripsy'
import { TextLink } from 'solito/link'

export default function AuthenticatedScreen({ children }) {
  const { user, userInitialized } = useContext(userContext)

  // link to your auth page
  if (userInitialized) {
    
    if (!user) {
      return (
        <View sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <P sx={{textAlign: 'center'}}>
            You are not signed in.
            {'\n'}Please go back to the homepage and sign in.
          </P>

          <TextLink
            textProps={{
              style: {
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 6
              }
            }}
            href="/">
            GO BACK TO HOMEPAGE
          </TextLink>
        </View>
      )
    }

    return <>{children}</>
  } else {
    return (
      <View sx={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator
          color="gray"
          size="large" />
      </View>
    )
  }
}