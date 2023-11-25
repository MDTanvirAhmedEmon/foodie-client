import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import { useGetSingleProductQuery, useUpdateProductMutation } from "../../../redux/features/products/productApi";
import { useParams } from "react-router-dom";

const UpdateProducts = () => {
    const {id} = useParams();
    const {data:singleProduct, isLoading} = useGetSingleProductQuery(id);
    const [updateProduct, { data:updatedProduct ,isLoading:updateIsLoading}] = useUpdateProductMutation();
    console.log(updatedProduct);

  const { register, handleSubmit } = useForm();

  const handleFormData = (data) => {
    const updatedProductInfo = {
        id: id,
        data,
    }
    updateProduct(updatedProductInfo)
    if (updatedProduct?.success) {
        toast.success("product updated successfully");
      }
  };

  if (isLoading || updateIsLoading) {
    return (
      <div className="my-20 ">
        <Spinner className="h-10 w-10 mx-auto" />
      </div>
    );
  }
  return (
    <div className=" md:w-[80%] shadow p-4 md:p-10 mt-4 md:mt-8 mx-3 md:mx-auto">
      <form
        onSubmit={handleSubmit(handleFormData)}
        className="w-auto px-3 md:px-0"
      >
        <div className="flex flex-col mt-3">
          <label htmlFor="">Title</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Title"
            type="title"
            defaultValue={singleProduct?.data?.title}
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Price</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Price"
            type="price"
            defaultValue={singleProduct?.data?.price}
            {...register("price", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Image Url</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Image Url"
            type="imageUrl"
            defaultValue={singleProduct?.data?.imageUrl}
            {...register("imageUrl", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Category</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Category"
            type="category"
            defaultValue={singleProduct?.data?.category}
            {...register("category", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Discount Price</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Optional"
            type="discountPrice"
            defaultValue={singleProduct?.data?.discountPrice}
            {...register("discountPrice", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Description</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Description"
            type="description"
            defaultValue={singleProduct?.data?.description}
            {...register("description", { required: true })}
          />
        </div>

        <input
          className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer"
          type="submit"
          value="Create"
        />
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateProducts;
