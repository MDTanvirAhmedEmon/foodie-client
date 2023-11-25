import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../../redux/features/products/productApi";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";

const CreateProducts = () => {
  const [createProduct, { data: createdProduct, isLoading }] =
    useCreateProductMutation();
  console.log(createdProduct);

  const { register, handleSubmit, reset } = useForm();
  const handleFormData = (data) => {
    createProduct(data);
    if (createdProduct?.success) {
      toast.success("product created successfully");
      reset();
    }
  };

  if (isLoading) {
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
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Price</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Price"
            type="price"
            {...register("price", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Image Url</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Image Url"
            type="imageUrl"
            {...register("imageUrl", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Category</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Category"
            type="category"
            {...register("category", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Discount Price</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Optional"
            type="discountPrice"
            {...register("discountPrice", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Description</label>
          <input
            className="border rounded-md p-3 mt-2 "
            placeholder="Description"
            type="description"
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

export default CreateProducts;
