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

export function Home() {
  const { userDetails, getPosts, posts, getFriends } = useContext(UserContext);
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails.name || !userDetails.profile_photo) {
      navigate("/");
    }
  });

  useEffect(() => {
    getPosts();
    getFriends();
  }, []);

  function onPost(e: FormEvent) {
    e.preventDefault();

    alert('post feito')

    // const newPost = {
    //   name: userDetails.name,
    //   description: post,
    //   url_imagem: "https://picsum.photos/200/300",
    // };

    // setPosts((prevValues) => [newPost, ...prevValues]);
    // setPost("");
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
            <WriteField
              post={post}
              setPost={setPost}
              onSubmit={onPost}
              profile_photo={userDetails.profile_photo}
            />
            <Posts
              posts={posts}
              current_user_photo={userDetails.profile_photo}
            />
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
