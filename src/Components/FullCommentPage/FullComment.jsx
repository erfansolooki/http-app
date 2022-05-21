import deleteAllComment from "../../Services/deleteAllCommentsService.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./FullComment.module.css";
import getOneComment from "../../Services/getOneCommentService";
import { useParams, useNavigate } from "react-router-dom";
const FullComment = () => {
  const commentId = useParams().id;
  const history = useNavigate();
  const navigateHandler = () => {
    history("/");
  };

  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((response) => {
          setComment(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteAllComment(commentId);
      navigateHandler();
      toast.success("comment has been deleted");
    } catch (error) {
      toast.error("something is wrong");
    }
  };

  let commentDetail = <p>please select a comment for show</p>;

  if (commentId) commentDetail = <p>Loading ... </p>;

  if (comment) {
    commentDetail = (
      <div className={styles.fullComment}>
        <main>
          <h2>Full Comment</h2>
          <section onClick={navigateHandler}>
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
