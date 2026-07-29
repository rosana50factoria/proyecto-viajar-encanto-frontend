import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import PublicacionDetalle from "../pages/PublicacionDetalle";

import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "create-post", element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ) },
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
      {
        path: "/publicacion/:id/editar",
        element: (
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
