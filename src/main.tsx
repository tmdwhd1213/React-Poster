import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import PostDetails, {
  loader as postDetailLoader,
} from "./routes/PostDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          { path: ":id", element: <PostDetails />, loader: postDetailLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // document.getElementById("root")! : TS에서 Null이 아님을 단언함.
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
