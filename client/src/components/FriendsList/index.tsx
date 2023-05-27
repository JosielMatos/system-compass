import styles from "./styles.module.css";
import upArrow from "../../assets/home-icons/up-arrow.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { api } from "../../services/api";

type User = {
  _id: string;
  name: string;
  username: string;
  birthdate: string;
  email: string;
  profile_photo: string;
};

export function FriendsList() {
  const { userDetails } = useContext(UserContext);
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    getFriends();
  }, [userDetails._id]);

  async function getFriends() {
    const users: User[] = await api
      .get("api/v1/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => response.data);

    if (userDetails._id) {
      setFriends(users.filter((user) => user._id !== userDetails._id));
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles["my-friends-header"]}>
        <h2>Meus Amigos</h2>
        <img src={upArrow} alt='Colapsar' />
      </div>

      <ul className={styles["my-friends-list"]}>
        {friends.map((friend, index) => {
          return (
            <li key={index}>
              <a href='#'>
                <img
                  src={`https://picsum.photos/200?random=${index + 1}`}
                  alt='Foto'
                />
                <p>{friend.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
