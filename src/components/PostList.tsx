import Post from "../components/Post";
import { PostData } from "../routes/NewPost";
import styles from "../styles/PostsList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  const posts: PostData[] = useLoaderData() as PostData[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(({ author, body, id }) => (
            <Post key={id} id={id} author={author} body={body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
