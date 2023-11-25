import { Spinner } from "@material-tailwind/react";
import { useGetProductsQuery } from "../../../redux/features/products/productApi";
import AdminSingleProduct from "./ProductsComponents/AdminSingleProduct";

const AllProducts = () => {
    const {data, isLoading} = useGetProductsQuery();


    console.log(data)


    if(isLoading)  {
        return <div className="my-20 ">
        <Spinner className="h-10 w-10 mx-auto" />
      </div>
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 mx-3 md:mx-6 my-6">
            {
                data?.data?.map(product => <AdminSingleProduct key={product._id} product={product}></AdminSingleProduct>)
            }
        </div>
    );
};

export default AllProducts;