import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashBoard from "../Layout/DashBoard";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Location from "../pages/Home/ApartmentLocation/Location";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/gulshan1',
          element: <Location />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "apartment",
          element: <Apartment />
        }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      {
        path: "userProfile",
        element: <PrivateRoute><UserProfile /></PrivateRoute>
      } 
    ]
  }
]);
