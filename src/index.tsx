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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "/result",
    element: <Result />
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);