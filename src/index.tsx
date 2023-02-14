import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);