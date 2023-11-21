import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import OurMenu from "../Pages/OurMenu/OurMenu";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import ThankYou from "../Pages/ThankYou/ThankYou";
import ProfileLayout from "../layout/ProfileLayout";
import MyOrder from "../Pages/MyOrder/MyOrder";
import OrderDetails from "../Pages/MyOrder/MyOrderComponent/OrderDetails";
import Admin from "../layout/Admin";
import DashBoard from "../Pages/Admin/DashBoard/DashBoard";
import Orders from "../Pages/Admin/Orders/Orders";
import UpdateOrder from "../Pages/Admin/Orders/UpdateOrder";
import PrivateAdminRoute from "./PrivateAdminRoute";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-menu/:id",
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/thank-you",
        element: <PrivateRoute><ThankYou></ThankYou></PrivateRoute>,
      },
    ],
  },
  {
    path: '/profile',
    element: <PrivateRoute><ProfileLayout></ProfileLayout></PrivateRoute>,
    children: [
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: '/profile/my-order',
        element: <MyOrder></MyOrder>
      },
      {
        path: '/profile/my-order/:id',
        element: <OrderDetails></OrderDetails>
      }
    ]
  },
  {
    path: '/admin-panel',
    element: <PrivateAdminRoute> <Admin></Admin> </PrivateAdminRoute>,
    children: [
      {
        path: "/admin-panel",
        element: <DashBoard></DashBoard>
      },
      {
        path: "/admin-panel/orders",
        element: <Orders></Orders>
      },
      {
        path: "/admin-panel/orders/update/:id",
        element: <UpdateOrder></UpdateOrder>
      },
    ]
  },
]);
