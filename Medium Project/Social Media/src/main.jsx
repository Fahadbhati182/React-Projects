import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList, { postLoader } from "./Components/PostList.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import Welcomemsg from "./Components/Welcomemsg.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Welcomemsg /> },
      { path: "home", element: <PostList /> , loader:postLoader },
      { path: "create-posts", element: <CreatePost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
