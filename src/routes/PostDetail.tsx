import { useLoaderData, Link, Params } from "react-router-dom";

import Modal from "../components/Modal";
import styles from "../styles/PostDetail.module.css";
import { PostData } from "./NewPost";

export default function PostDetails() {
  const post: PostData = useLoaderData() as PostData;

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export async function loader({ params }: { params: Params<"id"> }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const resData = await response.json();
  return resData.post;
}
