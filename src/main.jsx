import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/404';
import LoginPage from './Pages/login';
import RegistPage from './Pages/regist';
import HomePage from './Pages/home';
import LandingPage from './Pages/LandingPage';
import MyList from './Pages/myList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    path: "/list",
    element: <MyList />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
