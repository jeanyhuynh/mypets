import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import LayoutPage from './components/LayoutPage';
import ErrorPage from "./pages/errorPage";
import Guides from "./pages/guides";
import TrainingDog from "./pages/trainingDog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "gallery",
    element: <App />,
  },
  {
    path: "guides",
    element: <Guides />,
  },
  {
    path: "guides/training-dog",
    element: <TrainingDog />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutPage>
      <RouterProvider router={router} />
    </LayoutPage>
  </React.StrictMode>
);
