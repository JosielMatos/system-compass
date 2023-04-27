import styles from "./styles.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <img
        src='/compass-uol-negativo.png'
        alt='logo compass'
        className={styles.logo}
      />
    </nav>
  );
}
