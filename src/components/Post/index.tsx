import styles from "./styles.module.css";
import clock from "../../assets/home-icons/clock-post-info.svg";
import likeIcon from "../../assets/home-icons/like-icon.svg";
import commentIcon from "../../assets/home-icons/comment-icon.svg";
import shareIcon from "../../assets/home-icons/share-icon.svg";
import cameraIcon from "../../assets/home-icons/camera-icon.svg";
import landscapeIcon from "../../assets/home-icons/landscape-icon.svg";
import clipIcon from "../../assets/home-icons/clip-icon.svg";
import mapIcon from "../../assets/home-icons/map-icon.svg";
import emojiIcon from "../../assets/home-icons/emoji-icon.svg";

export function Post() {
  return (
    <article className={styles.wrapper}>
      <header>
        <div className={styles["post-user-info"]}>
          <img
            className={styles["profile-picture"]}
            src='https://wallpapercave.com/wp/wp7151807.jpg'
            alt='Foto'
          />
          <div className={styles["post-info"]}>
            <p>Carlos Andrade dos Santos</p>
            <p>
              <img src={clock} alt='relógio' />
              12 minutos atrás em <strong>Paisagens Exuberantes</strong>
            </p>
          </div>
        </div>

        <p className={styles["post-description"]}>
          Minha última viagem para a Ilha do Comendador, um lugar simplesmente
          incrível, natureza praticamente intocada. Recomendo a todos que
          apreciam o mundo como ele é.
        </p>
      </header>
      <img
        className={styles["post-image"]}
        src='https://source.unsplash.com/random'
        alt='Imagem da postagem'
      />
      <section className={styles["post-links"]}>
        <a href='#' className={styles.like}>
          <img src={likeIcon} alt='Curtir' />
          <p>Curtiu</p> <span>1.7K</span>
        </a>
        <a href='#' className={styles["comment-button"]}>
          <img src={commentIcon} alt='Adicionar comentário' />
          <p>Comentários</p> <span>345</span>
        </a>
        <a href='#' className={styles.share}>
          <img src={shareIcon} alt='Compartilhar' />
          <p>Compartilhar</p>
        </a>
      </section>

      <section className={styles.comment}>
        <img
          className={styles["profile-picture"]}
          src='https://wallpapercave.com/wp/wp7151807.jpg'
          alt='Foto'
        />
        <div className={styles["input-comment-container"]}>
        <input type='text' placeholder="O que você está pensando?" />
        <ul className={styles["comment-icons"]}>
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
        </div>
      </section>

      <p className={styles["all-comments-header"]}>Todos os comentários</p>

      <section className={styles["first-comment"]}>
        <img
          className={styles["profile-picture"]}
          src='https://wallpapercave.com/wp/wp7151807.jpg'
          alt='foto'
        />
        <p>
          <strong>Jackson:</strong> Que bela paisagem! As cores são simplesmente deslumbrantes e a composição é maravilhosa. Essa foto é uma verdadeira obra de arte que captura a beleza natural do nosso mundo. É fascinante ver como a natureza pode ser tão impressionante e inspiradora. Agradeço por compartilhar esta imagem conosco!
        </p>
      </section>

      <div className={styles.divider}></div>

      <a href='#' className={styles["check-comments-list"]}>
        <p>Ver todos os comentários</p>
      </a>
    </article>
  );
}
