import { useSelector } from "react-redux";
import Header from "../shared/Header";
import emptyCart from "../../assets/empty_cart.png";
import CartProduct from "./CartComponents/CartProduct";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);

  if (products.length === 0) {
    return (
      <div className="">
        <div className="h-20 bg-primary">
          <Header></Header>
        </div>
        <div className="container mx-auto py-10">
          <img className="mx-auto w-auto md:w-[600px]" src={emptyCart} alt="" />
          <p className="text-5xl md:text-6xl text-center">Cart is Empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="h-20 bg-primary z-[999]">
        <Header></Header>
      </div>
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="flex flex-col lg:flex-row gap-10 py-14">
          <div className="">
            <p className="text-3xl font-bold mb-7">Main Course:</p>
            {products.map((product) => (
              <CartProduct key={product._id} product={product}></CartProduct>
            ))}
          </div>
          <div>
            <p className="text-3xl font-bold mb-7">Extras:</p>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <p className="text-3xl font-bold">Total Price: ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;