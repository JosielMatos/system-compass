import styles from "./styles.module.css";

import cameraIcon from "../../assets/home-icons/camera-icon.svg";
import landscapeIcon from "../../assets/home-icons/landscape-icon.svg";
import clipIcon from "../../assets/home-icons/clip-icon.svg";
import mapIcon from "../../assets/home-icons/map-icon.svg";
import emojiIcon from "../../assets/home-icons/emoji-icon.svg";
import { FormEvent, useContext } from "react";
import { UserContext } from "../../contexts/userContext";

interface WriteFieldProps {
  post: string;
  setPost: (state: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export function WriteField({ post, setPost, onSubmit }: WriteFieldProps) {
  const {userDetails} = useContext(UserContext)

  return (
    <form onSubmit={onSubmit} className={styles["write-field"]}>
      <div>
        <img
          className={styles["profile-picture"]}
          src={userDetails.profile_photo}
          alt='Profile picture'
        />
        <input
          type='text'
          name='post'
          id='user-post'
          placeholder='No que você está pensando?'
          onChange={(e) => setPost(e.target.value)}
          value={post}
        />
      </div>
      <div>
        <ul>
          <li>
            <a href='#'>
              <img src={cameraIcon} alt='Adicionar foto com a câmera' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={landscapeIcon} alt='Adicionar imagem' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={clipIcon} alt='Adicionar Arquivo' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={mapIcon} alt='Adicionar localização' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={emojiIcon} alt='Adicionar emoji' />
            </a>
          </li>
        </ul>
        <button type='submit'>Postar</button>
      </div>
    </form>
  );
}
