import { ReactNode, createContext, useState } from "react";

type UserContextData = {
  userDetails: User;
  setUserDetails: (state: User) => void;
};

export const UserContext = createContext({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
}

type User = {
  _id: string;
  name: string;
  email: string;
  profile_photo: string;
};

export function UserContextProvider({ children }: UserProviderProps) {
  const [userDetails, setUserDetails] = useState({} as User);

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
