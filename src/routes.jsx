import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import FullComment from "./Components/FullCommentPage/FullComment";
import NewComments from "./pages/NewCommentsPage/NewComments";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/new-comment", element: <NewComments /> },
  { path: "/full-comment/:id", element: <FullComment /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
