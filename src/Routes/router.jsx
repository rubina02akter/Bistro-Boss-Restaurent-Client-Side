import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";


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
  ]
}

])

export default router;