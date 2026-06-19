import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MovieDetails from "../pages/MovieDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
])