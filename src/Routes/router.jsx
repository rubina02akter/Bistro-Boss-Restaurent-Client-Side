import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([

{
  path: '/',
  element: <MainLayout></MainLayout>,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/menu',
      element: <Menu></Menu>
    },
    {
      path: '/our-shop',
      element: <OurShop></OurShop>
    },
    {
      path: '/order',
      element: <Order></Order>
    },
    {
      path: '/order/:category',
      element: <Order></Order>
    },
    {
      path: 'login',
      element: <LogIn></LogIn>
    },
    {
      path: 'signup',
      element: <SignUp></SignUp>
    },
  ]
}

])

export default router;