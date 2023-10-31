/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import ProductCart from "../../OurMenu/OurMenuComponents/productCart";
import { useGetProductsQuery } from "../../../redux/features/products/productApi";

const FeaturedProducts = () => {
    const {data , isLoading} = useGetProductsQuery();

    return (
        <div>
            <div className="container mx-auto">
                <div className="py-20">
                    <div className="text-center">
                        <p className="text-xl text-secondary font-bold">OUR MENU</p>
                        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Choose & Enjoy</h1>
                    </div>
                    <div className="w-auto xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16 px-5 md:px-0">
                        {
                            data?.data?.map( product => <ProductCart key={product._id} product={product}></ProductCart>)
                        }
                    </div>
                    <div className="text-center">
                    <Link className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer" to={`/our-menu`}>Our Menu</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;