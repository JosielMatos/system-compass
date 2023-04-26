import { WriteField } from "../../components/WritePostField";
import { Nav } from "../../components/Nav";

import styles from "./styles.module.css";
import homeIcon from "../../assets/home-icon.svg";

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

        <section className={styles["posts"]}>
          <WriteField />
        </section>
      </main>
    </div>
  );
}
