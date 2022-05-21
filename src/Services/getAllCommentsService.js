import http from "./httpService";

const GetAllComments = () => {
  return http.get("/comments");
};

export default GetAllComments;
