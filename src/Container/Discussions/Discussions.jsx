import Comment from "../../Components/Comment";
import FullComment from "../../Components/FullComment";
import NewComments from "../../Components/NewComments";
import axios from "axios";
import { useEffect, useState } from "react";
const DiscussionsComponent = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getComments();
  }, []);

  async function getComments() {
    try {
      const { data } = await axios.get("http://localhost:3001/comments");
      setComments(data);
    } catch (error) {
      alert(error);
    }
  }

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const addComment = (comment) => {
    axios
      .post("http://localhost:3001/comments", comment)
      .then((response) => {
        // yse axios.get for show updated state
        axios
          .get("http://localhost:3001/comments")
          .then((response) => {
            setComments(response.data);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="comments">
        {comments
          ? comments.map((comment) => (
              <Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                onClick={() => selectCommentHandler(comment.id)}
              />
            ))
          : "Loading ... "}
      </section>
      <FullComment commentId={selectedId} />
      <NewComments addNewComment={addComment} />
    </div>
  );
};

export default DiscussionsComponent;
