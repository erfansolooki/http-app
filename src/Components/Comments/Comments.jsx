import Comment from "./Comment/Comment";
import getAllComments from "../../Services/getAllCommentsService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      setError(true);
    }
  }

  const renderComments = () => {
    // loading , error , comments
    let renderedComments = <p>Loading ... </p>;

    if (error) {
      renderedComments = <p>fetching data failed !</p>;
      toast.error("fetching data failed !");
    }

    if (comments && !error) {
      renderedComments = comments.map((comment) => (
        <Link to={`/full-comment/${comment.id}`} key={comment.id}>
          <Comment name={comment.name} email={comment.email} />
        </Link>
      ));
    }
    return renderedComments;
  };

  return <section className="comments">{renderComments()}</section>;
};

export default CommentsList;
