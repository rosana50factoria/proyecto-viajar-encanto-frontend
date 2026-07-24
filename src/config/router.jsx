import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      // más adelante: { path: "create-post", element: <CreatePost /> },
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
