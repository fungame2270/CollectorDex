import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './routes/Homepage';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AllCollections from './routes/AllCollections';

const API = "http://localhost:5000";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Homepage />,
  },
  {
    path: "/AllCollections",
    element: < AllCollections />,
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