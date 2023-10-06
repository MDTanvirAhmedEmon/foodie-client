import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/apiSlice";
import Header from "../shared/Header";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetSingleProductQuery(id);
  console.log(data);
  if (isLoading) {
    return <div className="text-center text-2xl mt-8">Loading...</div>;
  }

  return (
    <div>
      <div className="h-20 bg-primary">
        <Header></Header>
      </div>
      <div className="w-auto xl:w-[1200px] mx-auto py-14 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div>
            <img className="w-auto lg:w-[450px]" src={data.data.imageUrl} alt="" />
        </div>
        <div className="px-4 mt-7">
            <p className="text-4xl md:text-5xl font-bold mb-5">{data.data.title}</p>
            <h4 className="text-xl mb-4">Category: {data.data.category}</h4>
            <p className="text-2xl font-bold mb-3">Regular Price: ${data.data.price}</p>
            {
                data.data.discountPrice && <p className="text-2xl text-primary font-bold mb-5">Discount Price: ${data.data.discountPrice}</p>
            }
            <p className="text-lg">About: {data.data.description}</p>
            <button className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-10">Add TO Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
