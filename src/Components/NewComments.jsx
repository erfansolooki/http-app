import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./NewComments.module.css";
const NewComments = ({ addNewComment }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const newCommentHandler = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

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
        <button type="submit" onClick={() => addNewComment(comment)}>
          Add
        </button>
      </main>
    </div>
  );
};

export default NewComments;
