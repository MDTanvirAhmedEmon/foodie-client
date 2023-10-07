/* eslint-disable react/prop-types */

const CheckoutProductCart = ({ product }) => {
  return (
    <div>
      <div className="flex items-center px-0 md:px-10 py-2 border-b-2">
        <img className="w-[60px] md:w-[120px]" src={product.imageUrl} alt="" />

        <div className="ml-3 md:ml-7">
          <p className="text-lg font-semibold">{product.title} </p>
          <p className="text-md font-bold">Price: ${product.price} X {product.quantity}</p>
        </div>
        <div className="ml-3 md:ml-7">
        <p className="text-lg font-semibold">${product.price * product.quantity} </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCart;
