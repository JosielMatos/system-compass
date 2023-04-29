import styles from "./styles.module.css";
import upArrow from "../../assets/home-icons/up-arrow.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export function FriendsList() {
  const { userFriends } = useContext(UserContext);

  return (
    <section className={styles.wrapper}>
      <div className={styles["my-friends-header"]}>
        <h2>Meus Amigos</h2>
        <img src={upArrow} alt='Colapsar' />
      </div>

      <ul className={styles["my-friends-list"]}>
        {userFriends.map((friend, index) => {
          return (
            <li key={index}>
              <a href='#'>
                <img src={`https://picsum.photos/200?random=${index + 1}`} alt='Foto' />
                <p>{friend.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
