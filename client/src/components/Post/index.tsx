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
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

interface PostProps {
  user: string;
  post_date: string;
  description: string;
  likes: number;
  comments?: Comments[];
  url_imagem: string;
  current_user_photo: string;
}

interface Comments {
  user: string;
  comment: string;
}

export function Post({
  user,
  post_date,
  description,
  likes,
  comments,
  url_imagem,
  current_user_photo,
}: PostProps) {
  const { getUserName } = useContext(UserContext);

  return (
    <article className={styles.wrapper}>
      <header>
        <div className={styles["post-user-info"]}>
          <img
            className={styles["profile-picture"]}
            src='https://picsum.photos/200?random=1'
            alt='Foto'
          />
          <div className={styles["post-info"]}>
            <p>{getUserName(user)}</p>
            <p>
              <img src={clock} alt='relógio' />
              60 minutos atrás em <strong>Paisagens Exuberantes</strong>
            </p>
          </div>
        </div>

        <p className={styles["post-description"]}>{description}</p>
      </header>
      <img
        className={styles["post-image"]}
        src='https://source.unsplash.com/random'
        alt='Imagem da postagem'
      />
      <section className={styles["post-links"]}>
        <a href='#' className={styles.like}>
          <img src={likeIcon} alt='Curtir' />
          <p>Curtiu</p> <span>{likes}</span>
        </a>
        <a href='#' className={styles["comment-button"]}>
          <img src={commentIcon} alt='Adicionar comentário' />
          <p>Comentários</p>{" "}
          {comments ? <span>{comments.length}</span> : <span>0</span>}
        </a>
        <a href='#' className={styles.share}>
          <img src={shareIcon} alt='Compartilhar' />
          <p>Compartilhar</p>
        </a>
      </section>

      <section className={styles.comment}>
        <img
          className={styles["profile-picture"]}
          src={current_user_photo}
          alt='Foto'
        />
        <div className={styles["input-comment-container"]}>
          <input type='text' placeholder='O que você está pensando?' />
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

      {comments && (
        <section className={styles["first-comment"]}>
          <img
            className={styles["profile-picture"]}
            src='https://picsum.photos/200?random=2'
            alt='foto'
          />
          <p>
            <strong>{getUserName(comments[0].user)}:</strong> {comments[0].comment}
          </p>
        </section>
      )}

      <div className={styles.divider}></div>

      <a href='#' className={styles["check-comments-list"]}>
        <p>Ver todos os comentários</p>
      </a>
    </article>
  );
}
