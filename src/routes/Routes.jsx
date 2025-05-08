import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Models from "../pages/models/Models";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import OurMenu from "../ourMenu/OurMenu";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../layout/main/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import UserHome from "../pages/dashboard/userHome/UserHome";
import PrivateRoutes from "../routes/PrivateRoutes";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../pages/dashboard/managItem/ManageItem";

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
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [

            // admin use
            {
                path: "allUsers",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "addItem",
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: "manageItem",
                element: <AdminRoutes><ManageItem></ManageItem></AdminRoutes>
            },

            // user use
            {
                path: "cart",
                element: <Cart></Cart>
            },


            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
        ]
    }
]); 
