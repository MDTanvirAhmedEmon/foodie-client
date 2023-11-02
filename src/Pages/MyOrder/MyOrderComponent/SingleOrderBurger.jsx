/* eslint-disable react/prop-types */

const SingleOrderBurger = ({ product }) => {
  return (
    <div className="flex items-center">
      <img className="w-40" src={product.imageUrl} alt="" />
      <div>
        <p>{product?.title}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

export default SingleOrderBurger;
