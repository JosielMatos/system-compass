import { WriteField } from "../../components/WritePostField";
import { Nav } from "../../components/Nav";
import { FriendsList } from "../../components/FriendsList";
import { Trends } from "../../components/Trends";
import { Posts } from "../../components/Posts";
import { FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import homeIcon from "../../assets/home-icon.svg";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";

interface PostProps {
  _id: string;
  name: string;
  user_id: string;
  post_date: string;
  description: string;
  likes: number;
  url_image: string;
}

type UserInfo = {
  _id: string;
  email: string;
  name: string;
  profile_photo: string;
  iat: number;
  exp: number;
};

export function Home() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  async function getPosts() {
    await api.get("api/v1/posts").then((response) => setPosts(response.data));
  }

  useEffect(() => {
    if (userDetails.name && userDetails.profile_photo) return;

    const token = localStorage.getItem("token");
    if (token) {
      const userInfo: UserInfo = jwtDecode(token);

      if (userInfo.iat >= userInfo.exp) {
        localStorage.removeItem("token");
        navigate("/");
        return;
      }
      setUserDetails(userInfo);
      return;
    }
    navigate("/");
  });

  useEffect(() => {
    getPosts();
  }, [userDetails.name]);

  async function onPost(e: FormEvent) {
    e.preventDefault();

    const newPost = {
      user_id: userDetails._id,
      name: userDetails.name,
      description: post,
    };

    try {
      const serverResponse = await api
        .post("/api/v1/posts", newPost)
        .then((response) => response.data);
      setPosts((prevValues) => [serverResponse, ...prevValues]);
    } catch (error) {
      console.log(error);
      alert("Ops, Não foi possível se conectar com o servidor!");
    }

    setPost("");
  }

  return (
    <div className={styles.wrapper}>
      <Nav />
      <main className={styles.main}>
        <header className={styles.header}>
          <a href='#' className={styles["header-item"]}>
            <img src={homeIcon} alt='Home' />
            <h2>Home</h2>
          </a>

          <a href='#' className={styles["header-item"]}>
            <p>{userDetails.name}</p>
            <img
              className={styles["profile-picture"]}
              src={userDetails.profile_photo}
              alt='Profile picture'
            />
          </a>
        </header>

        <div className={styles["posts-trends-wrapper"]}>
          <section className={styles["posts"]}>
            <WriteField post={post} setPost={setPost} onSubmit={onPost} />
            <Posts posts={posts} />
          </section>

          <section className={styles.trends}>
            <FriendsList />
            <Trends />
            <Trends />
          </section>
        </div>
      </main>
    </div>
  );
}
