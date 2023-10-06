import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import OurMenu from "../Pages/OurMenu/OurMenu";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";

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
    ],
  },
]);
