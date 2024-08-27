import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/accueil.jsx';
import Propos from './routes/a_propos';

import LogementIndiv from './routes/logement_indiv.jsx';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    element : <Home />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "accueil",
    //     element: <Home />,
    //     errorElement: <ErrorPage />,
    //   },
    //   {
    //     path: "a_propos",
    //     element: <Propos />,
    //     errorElement: <ErrorPage />,
    //   },
    //   {
    //     path: "logement/:id",
    //     element: <LogementIndiv />,
    //     errorElement: <ErrorPage />,
    
    //   },
     

    // ],
    
    
  },
  // {
  //   path: "accueil",
  //   element: <Home />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "a_propos",
    element: <Propos />,
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
