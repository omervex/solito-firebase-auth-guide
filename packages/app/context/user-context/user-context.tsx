import { createContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "../../firebase/firebase";


type UserT = User | null;

// I ❤️ TS
type UserContextT = {
  user: UserT;
  userInitialized: boolean;
}

export const userContext = createContext<UserContextT>({
  user: null, userInitialized: false,
});

export default function UserProvider({ children }:
  { children: React.ReactNode }) {

  const [user, setUser] = useState<UserT>(null);
  const [userInitialized, setuserInitialized] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
      setuserInitialized(true);
    });

    return unsubscribe;
  }, []);

  return (
    <userContext.Provider value={{user, userInitialized}}>
      {children}
    </userContext.Provider>
  );
}