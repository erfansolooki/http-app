import http from "./httpService";

const deleteAllComments = (commentId) => {
  return http.delete(`/comments/${commentId}`);
};

export default deleteAllComments;
