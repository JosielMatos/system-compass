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
import { api } from "../../services/api";
import { FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";

interface PostProps {
  _id: string;
  name: string;
  user_id: string;
  post_date: string;
  description: string;
  likes: number;
  url_image: string;
}

interface Comment {
  name: string;
  comment: string;
}

export function Post({
  _id,
  name,
  user_id,
  post_date,
  description,
  likes,
  url_image,
}: PostProps) {
  const { userDetails } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments();
  }, [_id]);

  async function getComments() {
    await api.get(`api/v1/posts/${_id}/comments`).then((response) => {
      setComments(response.data);
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const newComment = {
      post_id: _id,
      name: userDetails.name,
      comment: comment,
    };

    try {
      const serverResponse = await api
        .post(`api/v1/posts/${_id}/comments`, newComment)
        .then((response) => response.data);
      setComments((prevValues) => [serverResponse, ...prevValues]);
    } catch (error) {
      console.log(error);
      alert("Ops, Não foi possível se conectar com o servidor!");
    }

    setComment("");
  }

  return (
    <article className={styles.wrapper}>
      <header>
        <div className={styles["post-user-info"]}>
          <img
            className={styles["profile-picture"]}
            src={
              user_id === userDetails._id
                ? userDetails.profile_photo
                : "https://picsum.photos/200?random=1"
            }
            alt='Foto'
          />
          <div className={styles["post-info"]}>
            <p>{name}</p>
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
        src={url_image}
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
          src={userDetails.profile_photo}
          alt='Foto'
        />
        <div className={styles["input-comment-container"]}>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              placeholder='O que você está pensando?'
              onChange={(e) => setComment(e.target.value)}
            />
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
          </form>
        </div>
      </section>

      <p className={styles["all-comments-header"]}>Todos os comentários</p>

      {comments.length ? (
        <section className={styles["first-comment"]}>
          <img
            className={styles["profile-picture"]}
            src='https://picsum.photos/200?random=2'
            alt='foto'
          />
          <p>
            <strong>{comments[0].name}:</strong> {comments[0].comment}
          </p>
        </section>
      ) : null}

      <div className={styles.divider}></div>

      <a href='#' className={styles["check-comments-list"]}>
        <p>Ver todos os comentários</p>
      </a>
    </article>
  );
}
