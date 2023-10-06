/* eslint-disable react/prop-types */
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeAll,
  removeOne,
} from "../../../redux/features/cart/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center px-2 md:px-14 py-8 md:py-4 rounded-lg mb-5 bg-slate-100">
          <img
            className="w-[70px] md:w-[150px]"
            src={product.imageUrl}
            alt=""
          />

          <div className="ml-3 md:ml-7">
            <p className="text-lg font-semibold">{product.title}</p>
            <p className="text-md font-bold">Price: ${product.price}</p>
          </div>

          <div className="flex items-center justify-center ml-4 md:ml-7 border border-primary p-2 rounded-lg">
            <ChevronLeftIcon
              onClick={() => dispatch(removeOne(product))}
              className="h-6 w-6 text-primary  mr-0 md:mr-3 cursor-pointer font-bold "
            />
            <p className="mx-2 md:mx-4">{product.quantity}</p>
            <ChevronRightIcon
              onClick={() => dispatch(addToCart(product))}
              className="h-6 w-6 text-primary mr-0 md:ml-3 cursor-pointer font-bold "
            />
          </div>

          <XMarkIcon
            onClick={() => dispatch(removeAll(product))}
            className="h-10 w-10 cursor-pointer bg-primary text-white rounded-lg ml-3 md:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
