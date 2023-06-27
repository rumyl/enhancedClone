import React from 'react'
import './assets/styles/index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./layouts/Header";
import ErrorPage from "./pages/error-pages";
import Manhua from "./pages/Manhua";
import Patreon from "./pages/Patreon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Manhua",
        element: <Manhua />,
      },
      {
        path: "Patreon",
        element: <Patreon />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  
)

