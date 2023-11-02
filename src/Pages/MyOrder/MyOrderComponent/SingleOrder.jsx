/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleOrder = ({ order }) => {
  return (
    <div className=" bg-slate-100 shadow-md py-10 px-6 mx-3 md:mx-0 ">
      <div className="flex items-center justify-start">
        <div className="flex items-center gap-3">
          <img className="w-20" src={order.product[0].imageUrl} alt="" />
          <div>
            <p className="mb-2">
              Burger:{" "}
              {order.product.map((product) => (
                <span className="ml-1" key={product._id}>
                  {product.title},{" "}
                </span>
              ))}
            </p>
            <p className="mb-1">Total Price: ${order.totalPrice}</p>
            <p>Status: {order.orderStatus}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to={`/profile/my-order/${order._id}`} className="text-sm bg-primary rounded-md  text-white py-1 px-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleOrder;
