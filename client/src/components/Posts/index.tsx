import { useEffect } from "react";
import { api } from "../../services/api";
import { Post } from "../Post";
import styles from "./styles.module.css";

interface PostProps {
  _id: string;
  name: string;
  user_id: string;
  post_date: string;
  description: string;
  likes: number;
  url_image: string;
}

interface Posts {
  posts: PostProps[]
}

export function Posts({ posts }: Posts) {
  return (
    <div className={styles["posts-list"]}>
      {!posts.length ? (
        <h2>Parece que não temos posts ainda...</h2>
      ) : (
        posts.map((post) => {
          return (
            <Post
              key={post._id}
              _id={post._id}
              user_id={post.user_id}
              name={post.name}
              post_date={post.post_date}
              description={post.description}
              likes={post.likes}
              url_image={post.url_image}
            />
          );
        })
      )}
    </div>
  );
}
