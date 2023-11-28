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
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import AgreementsRequest from "../pages/Dashboard/Admin/AgreementsRequest";
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers";
import MakeAnnouncements from "../pages/Dashboard/Admin/MakeAnnouncements";
import Announcements from "../pages/Dashboard/UserProfile/Announcements";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons";

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
      // user dashboard
      {
        path: "userProfile",
        element: <PrivateRoute><UserProfile /></PrivateRoute>
      },
      {
        path: "announcements",
        element: <Announcements />
      },
      // admin only routes
      {
        path: 'adminProfile',
        element: <AdminProfile />
      },
      {
        path: 'adminAnnouncements',
        element: <MakeAnnouncements />
      },
      {
        path: 'manageMembers',
        element: <ManageMembers />
      },
      {
        path: 'agreementsRequest',
        element: <AgreementsRequest />

      },
      {
        path: 'manageCoupons',
        element: <ManageCoupons />

      },
    ]
  }
]);
