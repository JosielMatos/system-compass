import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

type UserContextData = {
  userDetails: User;
  setUserDetails: (state: User) => void;
  userList: User[];
  setUserList: (state: User[]) => void;
  getPosts: () => void;
  posts: PostProps[];
  getFriends: () => void;
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
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [userList, setUserList] = useState([] as User[]);

  async function getPosts() {
    await api.get("api/v1/posts").then((response) => setPosts(response.data));
  }

  async function getFriends() {
    await api
      .get("api/v1/users")
      .then((response) => setUserList(response.data));
    const friends = [...userList].filter(
      (user) => user._id !== userDetails._id
    );
    setUserList(friends);
  }

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
        setUserList,
        userList,
        getPosts,
        posts,
        getFriends,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
