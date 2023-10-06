import { createBrowserRouter } from "react-router-dom";

import ErrorPages from "../../pages/ErrorPages/ErrorPages";
import HomePages from "../../pages/HomePages/HomePages";
import CartPages from "../../pages/CartPages/CartPages.jsx";
import Post, { postsLoader } from "../../components/Post/Post";
import SinglePost, {
  singlePostsLoader,
} from "../../components/SinglePost/SinglePost";
import AddPost, { addPostAction } from "../../components/AddPost/AddPost";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        path: "home",
        element: <HomePages />,
      },
      {
        path: "posts",
        element: <Post />,
        loader: postsLoader,
      },
      {
        path: "posts/:id",
        element: <SinglePost />,
        loader: singlePostsLoader,
      },
      {
        path: "add",
        element: <AddPost />,
        action: addPostAction,
      },
      {
        path: "cart",
        element: <CartPages />,
      },
    ],
  },
]);

export default router;
