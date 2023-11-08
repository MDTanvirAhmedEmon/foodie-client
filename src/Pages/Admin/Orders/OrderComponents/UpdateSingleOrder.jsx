/* eslint-disable react/prop-types */


const UpdateSingleOrder = ({product}) => {
    return (
        <div className="flex items-center">
            <img className="w-32 md:w-48" src={product?.imageUrl} alt="" />
            <div className="text-lg ml-3">
            <p>{product?.title}</p>
            <p>${product?.price} X {product.quantity}</p>
            <p>Price ${product?.price * product.quantity}</p>
            </div>
        </div>
    );
};

export default UpdateSingleOrder;