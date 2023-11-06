import { useDispatch, useSelector } from "react-redux";
import Header from "../shared/Header";
import CheckoutProductCart from "./CheckoutComponents/CheckoutProductCart";
import { useForm } from "react-hook-form";
import { useGetSingleUserQuery } from "../../redux/features/products/productApi";
import { useMakeOrderMutation, useUpdateUserMutation } from "../../redux/features/order/orderApi";
import { useNavigate } from "react-router-dom";
import { makeEmpty } from "../../redux/features/cart/cartSlice";


const Checkout = () => {
  const navigate = useNavigate();
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products)

  const { register, handleSubmit } = useForm();
  const { data:currentUser } = useGetSingleUserQuery();

  const [updateUser, {data:UpdatedUser}] = useUpdateUserMutation();
  console.log(UpdatedUser)
  const [makeOrder, {data:myOrderData, isLoading}] = useMakeOrderMutation();
  console.log(myOrderData)
  const burgerOrderDate = new Date().toISOString();
  console.log(burgerOrderDate);
  const handleFormData = (data) => {
    const updatedData = {
      id: currentUser?.data?._id,
      data: data
    };
    updateUser(updatedData);

    const orderData = {
      user: currentUser?.data?._id,
      product: products,
      orderDate: burgerOrderDate,
      orderStatus: "processing",
      totalPrice: total,
    }
    makeOrder(orderData)
  };
  if(myOrderData?.success){
    navigate(`/thank-you`)
    dispatch(makeEmpty())
  }
  if(isLoading){
    return <div className="h-screen"> <p className="text-xl text-center mt-14">Loading...</p></div>
  }

  return (
    <div>
      <div className="h-20 bg-primary">
        <Header></Header>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-8 md:py-16">
        <div className=" w-auto xl:w-2/3 px-3 md:px-0">
          <p className="text-3xl font-bold mb-6 ">Billing details</p>

          <form onSubmit={handleSubmit(handleFormData)} className="w-auto px-3 md:px-0">
          <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">First Name</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="First Name"
                  type="text"
                  defaultValue={currentUser?.data?.firstName}
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Last Name</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Last Name"
                  type="text"
                  defaultValue={currentUser?.data?.lastName}
                  {...register("lastName", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-4 mt-3 md:mt-4 ">
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Email</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Your Email"
                  type="email"
                  defaultValue={currentUser?.data?.email}
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Phone</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Your Phone Number"
                  type="phone"
                  defaultValue={currentUser?.data?.phone}
                  {...register("phone", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="">Address</label>
              <input
                className="border rounded-md p-3 mt-2 "
                placeholder="Address In Detail"
                type="text"
                defaultValue={currentUser?.data?.address}
                {...register("address", { required: true })}
              />
            </div>

            <div className="flex flex-col md:flex-row  gap-4 mt-3 md:mt-4 ">
              <div className="flex flex-col mt-3 md:w-1/3">
                <label htmlFor="">District</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="District"
                  type="text"
                  defaultValue={currentUser?.data?.district}
                  {...register("district", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/3">
                <label htmlFor="">Upazila</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Upazila"
                  type="text"
                  defaultValue={currentUser?.data?.upazila}
                  {...register("upazila", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/3">
                <label htmlFor="">PostCode/ZIP</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Post Office ZIP Code"
                  type="text"
                  defaultValue={currentUser?.data?.zipCode}
                  {...register("zipCode", { required: true })}
                />
              </div>
            </div>


            <div>
              <p className="text-3xl font-bold mt-6">Payment </p>
            </div>
            <div className="2xl:border-l-2 pb-6 md:pl-10 2xl:pl-0 px-3 md:px-0 mt-5 md:mt-0 block md:hidden">
              {products.map((product) => (
                <CheckoutProductCart
                  key={product._id}
                  product={product}
                ></CheckoutProductCart>
              ))}
              <p className="text-xl font-bold mt-4">
                Total: ${total.toFixed(2)}
              </p>
            </div>
            <input
              className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer"
              type="submit"
              value="Make Order"
            />

          </form>
        </div>

        <div className="2xl:border-l-2 pb-10 md:pl-10 2xl:pl-0 px-3 md:px-0 mt-5 md:mt-0 hidden md:block">
          {products.map((product) => (
            <CheckoutProductCart
              key={product._id}
              product={product}
            ></CheckoutProductCart>
          ))}
          <p className="text-xl font-bold mt-4 ml-12">
            Total: ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
