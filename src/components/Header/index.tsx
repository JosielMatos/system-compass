import styles from "./styles.module.css";

interface HeaderProps {
  text: string;
}

export function Header({ text }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.hello}>Olá,</h2>
      <p className={styles["header-text"]}>
        {text}
      </p>
    </header>
  );
}
