import { useNavigate } from "react-router-dom";
import styles from "../styles/Modal.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}
