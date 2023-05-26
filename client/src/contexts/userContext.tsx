import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

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
  username: string;
  birthdate: string;
  email: string;
  profile_photo: string;
};

interface PostProps {
  _id: string;
  name: string;
  user_id: string;
  post_date: string;
  description: string;
  likes: number;
  url_image: string;
}

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
