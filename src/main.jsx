import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/404';
import LoginPage from './Pages/login';
import RegistPage from './Pages/regist';
import RegistPage2 from './Pages/regist2';
import HomePage from './Pages/home';
import AuthLayouts from './components/Layouts/AuthLayouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
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
  },
  {
    path: "/regist2",
    element: <RegistPage2 />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
