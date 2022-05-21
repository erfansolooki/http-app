import { useState } from "react";
import { postAllComments } from "../../Services/postAllComment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./NewComments.module.css";
const NewComments = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const history = useNavigate();

  const newCommentHandler = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  async function addComment() {
    try {
      await postAllComments({ ...comment });
      history("/");
      toast.success("Your comment has been added");
    } catch (error) {
      toast.error("something is wrong");
    }
  }

  return (
    <div className={styles.newComments}>
      <main>
        <h2>NewComments</h2>

        <label htmlFor="name">Name :</label>
        <input
          onChange={newCommentHandler}
          type="text"
          name="name"
          id=""
          value={comment.name}
        />
        <label htmlFor="email">Email :</label>
        <input
          onChange={newCommentHandler}
          type="email"
          name="email"
          id=""
          value={comment.email}
        />
        <label htmlFor="body">Content :</label>
        <textarea
          onChange={newCommentHandler}
          name="body"
          id=""
          cols="30"
          rows="10"
          value={comment.body}
        ></textarea>
        <button type="submit" onClick={addComment}>
          Add
        </button>
      </main>
    </div>
  );
};

export default NewComments;
