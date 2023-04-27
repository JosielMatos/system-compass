import { useEffect } from "react"
import { Post } from "../Post"
import styles from "./styles.module.css"


export function Posts() {
  useEffect(() => {
    async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/user/post");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <div className={styles["posts-list"]}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}