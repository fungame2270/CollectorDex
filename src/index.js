import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from './routes/Homepage';
import AllCollections from './routes/AllCollections';
import Login from './routes/Login';
import ItemPage from './routes/ItemPage'
import CollectionPage from './routes/CollectionPage';

const API = "http://localhost:5000";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Login />,
  },
  {
    path: "/Home",
    element: < Homepage />,
  },
  {
    path: "/AllCollections",
    element: < AllCollections />,
  },
  {
    path: "/AllCollections/:id",
    element: < CollectionPage />,
  },
  {
    path: "/AllCollections/:colID/:itemID",
    element: < ItemPage />,
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

export default API;