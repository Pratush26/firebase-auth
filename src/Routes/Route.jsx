import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import RegistrationPage from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoardPage from "../Pages/Dashboard";
import AboutPage from "../Pages/About";
import Loader from "../Components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loader />,
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/login',
        Component: LoginPage
      },
      {
        path: '/register',
        Component: RegistrationPage
      },
      {
        path: '/about',
        Component: AboutPage
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardPage /></PrivateRoute>
      },
    ]
  },
]);