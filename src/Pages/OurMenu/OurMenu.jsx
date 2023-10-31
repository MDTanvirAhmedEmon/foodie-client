
import { useGetProductsQuery } from "../../redux/features/products/productApi";
import Header from "../shared/Header";
import ProductCart from "./OurMenuComponents/productCart";

const OurMenu = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  if (isLoading) {
    return (
      <div>
        <div className="bg-primary ">
          <div className="container mx-auto h-64 md:h-96 relative">
            <Header></Header>
            <div className="h-32 md:h-64 flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold text-white">Check Out</p>
              <h1 className="text-4xl md:text-8xl font-bold text-white">
                Our Menu
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center text-3xl mt-10">Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-primary ">
        <div className="container mx-auto h-64 md:h-96 relative">
          <Header></Header>
          <div className="h-32 md:h-64 flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold text-white">Check Out</p>
            <h1 className="text-4xl md:text-8xl font-bold text-white">
              Our Menu
            </h1>
          </div>
        </div>
      </div>
      <div className="w-auto xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16 px-5 md:px-0">
        {data?.data?.map((product) => (
          <ProductCart key={product._id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
