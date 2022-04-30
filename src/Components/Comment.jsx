import styles from "./Comment.module.css";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className={styles.comments} onClick={onClick}>
      <main>
        <div className={styles.sections}>
          <section>
            <p>{name}</p>
            <p>{email}</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Comment;
