import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './routes/accueil.jsx'
import APropos from './routes/APropos.jsx'
import LogementIndiv from './routes/LogementIndiv.jsx'


import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from "./routes/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element : <Accueil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "a_propos",
    element: <APropos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "logement/:id",
    element: <LogementIndiv />,
    errorElement: <ErrorPage />,
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
