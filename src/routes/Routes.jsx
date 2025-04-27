import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Models from "../pages/models/Models";
import Dashboard from "../pages/dashboard/Dashboard";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import OurMenu from "../ourMenu/OurMenu";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "models",
                element: <Models></Models>,
            },
            {
                path: "ourMenu",
                element: <OurMenu></OurMenu>,
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "contact",
                element: <Contact></Contact>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ]
    },
]); 
