import http from "./httpService";

const getOneComment = (commentId) => {
  return http.get(`/comments/${commentId}`);
};

export default getOneComment;
