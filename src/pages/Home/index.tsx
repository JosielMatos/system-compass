import { WriteField } from "../../components/WritePostField";
import { Nav } from "../../components/Nav";
import { FriendsList } from "../../components/FriendsList";
import { Trends } from "../../components/Trends";

import styles from "./styles.module.css";
import homeIcon from "../../assets/home-icon.svg";
import { Post } from "../../components/Post";

export function Home() {
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
            <p>Eduardo Pereira</p>
            <img
              className={styles["profile-picture"]}
              src='https://wallpapercave.com/wp/wp7151807.jpg'
              alt='Profile picture'
            />
          </div>
        </header>

        <div className={styles["posts-trends-wrapper"]}>
          <section className={styles["posts"]}>
            <WriteField />
            <Post />
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
