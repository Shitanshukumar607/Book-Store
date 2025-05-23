import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "@/pages/home/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import SingleBook from "@/pages/singlePage/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "@/pages/OrderPage/OrderPage";
import AdminLogin from "@/components/AdminLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <h1>About</h1> },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      }, 
      { path: "/cart", element: <Cart /> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      { path: "books/:id", element: <SingleBook /> },
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
  {
    path: "/admin",
    element: <AdminLogin />,
  }
]);
