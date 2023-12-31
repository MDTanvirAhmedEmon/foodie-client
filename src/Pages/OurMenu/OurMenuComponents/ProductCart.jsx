/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCart = ({ product }) => {
  console.log(product);
  return (
    <Link to={`/our-menu/${product._id}`}>
      <div className="mx-auto cursor-pointer hover:shadow-2xl shadow py-10 px-5 rounded-2xl">
        <div>
          <img className="mx-auto" src={product?.imageUrl} alt="" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">{product?.title}</h3>
          <p className="text-lg font-bold text-primary">
            Price: {product?.price}
          </p>
          <p className="text-md">Discount Price: {product?.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
