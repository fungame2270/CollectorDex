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

const API = "http://localhost:5000";

const item = {
  "id": "1",
  "name": "Yellow Submarine - The Beatles",
  "img":"https://images.unsplash.com/photo-1629726211447-3df75890f372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "description": "we all live in the yellow submarine",
  "tags": ["drawer 2"]
  };

const router = createBrowserRouter([
  {
    path: "/",
    element: < ItemPage item={item}/>,
  },
  {
    path: "/Home",
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