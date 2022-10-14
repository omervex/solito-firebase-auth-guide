import UserProvider from 'app/context/user-context/user-context'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <UserProvider>
        <Dripsy>{children}</Dripsy>
      </UserProvider>
    </NavigationProvider>
  )
}
