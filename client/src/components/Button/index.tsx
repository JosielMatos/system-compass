import styles from './styles.module.css';

interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <button type="submit" className={styles.button}>{label}</button>;
}
