import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import App from "./App";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  { path: "/signin", element: <SignIn /> },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
