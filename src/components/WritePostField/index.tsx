import styles from './styles.module.css';

import cameraIcon from "../../assets/home-icons/camera-icon.svg";
import landscapeIcon from "../../assets/home-icons/landscape-icon.svg";
import clipIcon from "../../assets/home-icons/clip-icon.svg";
import mapIcon from "../../assets/home-icons/map-icon.svg";
import emojiIcon from "../../assets/home-icons/emoji-icon.svg";

export function WriteField() {
  return (
    <section className={styles["write-field"]}>
      <div>
        <img
          className={styles["profile-picture"]}
          src='https://wallpapercave.com/wp/wp7151807.jpg'
          alt='Profile picture'
        />
        <input
          type='text'
          name='post'
          id='user-post'
          placeholder='No que você está pensando?'
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
    </section>
  );
}
