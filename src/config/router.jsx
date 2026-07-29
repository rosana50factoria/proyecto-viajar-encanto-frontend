import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import PublicacionDetalle from "../pages/PublicacionDetalle";

import CreatePost from "../pages/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "create-post", element: <CreatePost /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "/publicacion/:id",
        element: (
          <ProtectedRoute>
            <PublicacionDetalle />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
