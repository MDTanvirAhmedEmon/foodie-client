import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Main = () => {
  const location = useLocation();
  const { products } = useSelector((state) => state.cart);

  let total = 0;
  for (const product of products) {
    total = total + product.quantity;
  }

  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
      <div className="fixed bottom-7 right-6 md:bottom-20 md:right-20">
        {location.pathname !== "/cart" && location.pathname !== "/checkout" && (
          <>
            <div className="bg-primary w-6 h-6 rounded-full text-white absolute top-[-8px] right-[-8px] shadow-2xl flex items-center justify-center">
              {total}
            </div>
            <Link to={"/cart"}>
              <ShoppingCartIcon className="h-16 w-16 rounded-full shadow-2xl shadow-black md:shadow-2xl md:shadow-slate-900 p-2 bg-white text-black  cursor-pointer" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
