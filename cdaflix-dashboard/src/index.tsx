import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Root from './routes/Root';
import ErrorPage from './pages/ErrorPage';
import Films from './pages/Films/Films';
import Film from './pages/Film/Film';
import FilmService from './services/FilmService';

const rootElement: any = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "films",
        element: <Films/>,
        errorElement: <ErrorPage/>,
      },       
      {
        path: "addMovie",
        element: <Film/>,
        errorElement: <ErrorPage/>
      },
      
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
);
