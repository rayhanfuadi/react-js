import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/404';
import LoginPage from './Pages/login';
import RegistPage from './Pages/regist';
import HomePage from './Pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/regist",
    element: <RegistPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
