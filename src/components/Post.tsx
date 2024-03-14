import { Link } from "react-router-dom";
import styles from "../styles/Post.module.css";

type Props = {
  author: string;
  body: string;
  id: string;
};

export default function Post({ id, author, body }: Props) {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}
