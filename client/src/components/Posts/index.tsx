import { Post } from "../Post";
import styles from "./styles.module.css";

interface PostProps {
  user: string;
  post_date: string;
  description: string;
  likes: number;
  comments?: Comments[];
  url_imagem: string;
}

interface Comments {
  user: string;
  comment: string;
}

interface Posts {
  posts: PostProps[];
  current_user_photo: string,
}

export function Posts({ posts, current_user_photo }: Posts) {
  return (
    <div className={styles["posts-list"]}>
      {!posts.length ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post, index) => {
          return (
            <Post
              key={index}
              user={post.user}
              post_date={post.post_date}
              description={post.description}
              likes={post.likes}
              comments={post.comments}
              url_imagem={post.url_imagem}
              current_user_photo={current_user_photo}
            />
          );
        })
      )}
    </div>
  );
}
