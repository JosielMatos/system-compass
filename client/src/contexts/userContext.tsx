import { ReactNode, createContext, useState } from "react";

type UserContextData = {
  userDetails: User;
  setUserDetails: (state: User) => void;
  userList: User[];
  setUserList: (state: User[]) => void;
  getUserName: (user: string) => string | undefined;
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
  const [userList, setUserList] = useState([] as User[]);

  function getUserName(user: string) {
    for (let userDetails in userList) {
      if (userList[userDetails].user === user) {
        return userList[userDetails].name;
      }
    }
  }

  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, setUserList, userList, getUserName }}
    >
      {children}
    </UserContext.Provider>
  );
}
