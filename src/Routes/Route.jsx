import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import RegistrationPage from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
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
    ]
  },
]);