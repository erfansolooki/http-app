import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((response) => {
          setComment(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, [commentId]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((response) => {
        console.log(response);
        setComment(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  let commentDetail = <p>please select a comment for show</p>;

  if (commentId) commentDetail = <p>Loading ... </p>;

  if (comment) {
    commentDetail = (
      <div className={styles.fullComment}>
        <main>
          <h2>Full Comment</h2>
          <section>
            <p>Name : {comment.name}</p>
            <p>Email : {comment.email}</p>
            <p>Body : {comment.body}</p>
          </section>
          <button className={styles.delete} onClick={deleteHandler}>
            Delete
          </button>
        </main>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
