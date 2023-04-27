import styles from './styles.module.css'
import upArrow from '../../assets/home-icons/up-arrow.svg'

export function FriendsList() {
  return (
    <section className={styles.wrapper}>
      <div className={styles["my-friends-header"]}>
        <h2>Meus Amigos</h2>
        <img src={upArrow} alt="Colapsar" />
      </div>

      <ul className={styles["my-friends-list"]}>
        <li>
          <img src="https://wallpapercave.com/wp/wp7151807.jpg" alt="Foto" />
          <p>Nome</p>
        </li>
        <li>
          <img src="https://wallpapercave.com/wp/wp7151807.jpg" alt="Foto" />
          <p>Nome</p>
        </li>
        <li>
          <img src="https://wallpapercave.com/wp/wp7151807.jpg" alt="Foto" />
          <p>Nome</p>
        </li>
        <li>
          <img src="https://wallpapercave.com/wp/wp7151807.jpg" alt="Foto" />
          <p>Nome</p>
        </li>
      </ul>
    </section>
  );
}