import { ReactNode, createContext, useState } from "react";

type UserContextData = {
  userDetails: User;
  setUserDetails: (state: User) => void;
  userFriends: User[];
  setUserFriends: (state: User[]) => void;
};

export const UserContext = createContext({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
}

type User = {
  name: string;
  user: string;
  birthdate: string;
  email: string;
  profile_photo: string;
};

export function UserContextProvider({ children }: UserProviderProps) {
  const [userDetails, setUserDetails] = useState({} as User);
  const [userFriends, setUserFriends] = useState([] as User[]);

  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, setUserFriends, userFriends }}
    >
      {children}
    </UserContext.Provider>
  );
}
