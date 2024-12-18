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
import Profile from './Pages/profile';
import ChangeService from './Pages/changeService';
import Film from './Pages/Film'
import Admin from './Pages/Admin';
import Langganan from './Pages/Langganan';
import Payment from './Pages/Payment';
import { Provider } from 'react-redux';
import store from './stores/store';

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
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "/changeService",
    element: <ChangeService />,
  },
  {
    path: "/film",
    element: <Film />,
  },
  {
    path: "/admin",
    // path: "/admin",
    element: <Admin />,
  },
  {
    path: "/langganan",
    element: <Langganan />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
