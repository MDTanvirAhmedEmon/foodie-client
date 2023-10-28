import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/apiSlice";
import Header from "../shared/Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) {
    return (
      <div>
        <div className="h-20 bg-primary">
          <Header></Header>
        </div>
        <div className="text-center text-3xl mt-10">Loading...</div>;
      </div>
    );
  }

  return (
    
    <div>

      <div className="h-20 bg-primary">
        <Header></Header>
      </div>
      <div className="w-auto xl:w-[1200px] mx-auto py-7 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div>
          <img
            className="w-auto lg:w-[450px]"
            src={data.data.imageUrl}
            alt=""
          />
        </div>
        <div className="px-4 mt-7">
          <p className="text-4xl md:text-5xl font-bold mb-5">
            {data.data.title}
          </p>
          <h4 className="text-xl mb-4">Category: {data.data.category}</h4>
          <p className="text-2xl font-bold mb-3">
            Regular Price: ${data.data.price}
          </p>
          {data.data.discountPrice && (
            <p className="text-2xl text-primary font-bold mb-5">
              Discount Price: ${data.data.discountPrice}
            </p>
          )}
          <p className="text-lg">About: {data.data.description}</p>
          <button
            onClick={() => {
              dispatch(addToCart(data.data));
              toast.success("Burger Added To Cart");
            }}
            className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-10"
          >
            Add TO Cart
          </button>

        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SingleProduct;
