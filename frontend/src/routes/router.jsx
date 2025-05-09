import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "@/pages/home/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Cart from "@/pages/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <h1>About</h1> },
      { path: "contact", element: <h1>Contact</h1> },
      { path: "/cart", element: <Cart /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
