import { useEffect, useState } from "react";
import { Post } from "../Post";
import styles from "./styles.module.css";

interface PostProps {
  user: string;
  post_date: string;
  description: string;
  likes: number;
  comments: Comments[];
}

interface Comments {
  user: string;
  comment: string;
}

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://localhost:5000/api/v1/user/post")
      .then((res) => res.json())
      .then((posts) => setPosts(posts.posts));
  }

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
            />
          );
        })
      )}
    </div>
  );
}
