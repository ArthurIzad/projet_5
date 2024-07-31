import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Home from './routes/home';
import Propos from './routes/a_propos';
import ImgHead from './component/home_component.js'

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "accueil",
        element: <Home />,
        errorElement: <ErrorPage />,

      },
      {
        path: "a_propos",
        element: <Propos />,
        errorElement: <ErrorPage />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
