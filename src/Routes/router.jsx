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
import AddItem from "../Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Dashboard/ManageItems/UpdateItem";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Dashboard/UserHome/UserHome";
import AdminHome from "../Dashboard/AdminHome/AdminHome";


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
     element: <UserHome></UserHome>

    },
    //normal use

    {
      path: 'cart',
      element: <Cart></Cart>

    },
    {
      path: 'payment',
      element: <Payment></Payment>

    },

    //admin routes
    {
      path: 'adminHome',
      element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    },
    {
      path: 'allUser',
      element: <AdminRoute><AllUser></AllUser></AdminRoute>
    },
    {
      path: 'addItem',
      element: <AdminRoute><AddItem></AddItem></AdminRoute>
    },
    {
      path: 'manageItems',
      element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    },
    // {
    //   path: 'updateItem/:id',
    //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
    //   loader: ({params}) => fetch (`http://localhost:5000/menu/${params.id}`)
    // },
    {
      path: 'updateItem/:id',
      element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
      loader: ({params}) => fetch(`https://bistro-boss-server-side-brown.vercel.app/menu/${params.id}`)
    },
    {
      path: 'paymentHistory',
      element: <PaymentHistory></PaymentHistory>
    },
  
  ]
}

])

export default router;