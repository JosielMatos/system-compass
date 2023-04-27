import { WriteField } from "../../components/WritePostField";
import { Nav } from "../../components/Nav";
import { FriendsList } from "../../components/FriendsList";
import { Trends } from "../../components/Trends";
import { Posts } from "../../components/Posts";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import homeIcon from "../../assets/home-icon.svg";

export function Home() {
  const { userDetails } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails.name || !userDetails.profile_photo) {
      navigate("/");
    }
  });

  return (
    <div className={styles.wrapper}>
      <Nav />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles["header-item"]}>
            <img src={homeIcon} alt='Home' />
            <h2>Home</h2>
          </div>

          <div className={styles["header-item"]}>
            <p>{userDetails.name}</p>
            <img
              className={styles["profile-picture"]}
              src={userDetails.profile_photo}
              alt='Profile picture'
            />
          </div>
        </header>

        <div className={styles["posts-trends-wrapper"]}>
          <section className={styles["posts"]}>
            <WriteField />
            <Posts />
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
