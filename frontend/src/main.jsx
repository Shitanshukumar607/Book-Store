import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer, toast } from "react-toastify";
import { AuthProvide } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvide>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvide>
    </Provider>
  </StrictMode>
);
