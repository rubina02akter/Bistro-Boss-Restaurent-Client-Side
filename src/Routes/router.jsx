import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import MyOrder from "../Pages/MyOrder/MyOrder";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart/Cart";
import Contact from "../Dashboard/Contact/Contact";
import AllUser from "../Dashboard/AllUsers/AllUser";


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
    {
      path: 'myOrder',
      element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
    },
    {
      path: 'contact',
      element: <Contact></Contact>

    },
  ]
},
{
  path: 'dashboard',
  element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  children: [
    {
      path: 'userHome',
      element: <Cart></Cart>

    },
    {
      path: 'cart',
      element: <Cart></Cart>

    },
    {
      path: 'reservation',
      element: <Cart></Cart>

    },
    {
      path: 'review',
      element: <Cart></Cart>

    },
    {
      path: 'bookings',
      element: <Cart></Cart>

    },
    //admin routes
    {
      path: 'allUser',
      element: <AllUser></AllUser>
    }
  
  ]
}

])

export default router;