import { useForm } from "react-hook-form";
import { useGetSingleUserQuery } from "../../redux/features/products/productApi";
import { useUpdateUserMutation } from "../../redux/features/order/orderApi";



const Profile = () => {
//   const { data } = useGetSingleUserQuery();


  const { register, handleSubmit } = useForm();
    const { data:currentUser } = useGetSingleUserQuery(undefined, {refetchOnMountOrArgChange: true});

  const [updateUser, {data:UpdatedUser}] = useUpdateUserMutation();
  console.log(UpdatedUser)


  const handleFormData = (data) => {
    const updatedData = {
      id: currentUser?.data?._id,
      data: data
    };
    updateUser(updatedData);

  };

  if(UpdatedUser) {
    window.location.reload();
  }


  return (
    <div className="container mx-auto">
      <div className=" ">
        <p className="text-3xl font-bold mt-8 mb-2 md:mb-6 text-center md:text-left">My Details</p>

        <form
          onSubmit={handleSubmit(handleFormData)}
          className="w-auto px-3 md:px-0 mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor="">First Name</label>
              <input
                className="border rounded-md p-3 mt-2 bg-slate-100"
                placeholder="First Name"
                type="text"
                defaultValue={currentUser?.data?.firstName}
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor="">Last Name</label>
              <input
                className="border rounded-md p-3 mt-2 bg-slate-100"
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
                className="border rounded-md p-3 mt-2 bg-slate-100"
                placeholder="Your Email"
                type="email"
                defaultValue={currentUser?.data?.email}
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor="">Phone</label>
              <input
                className="border rounded-md p-3 mt-2 bg-slate-100"
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
              className="border rounded-md p-3 mt-2 bg-slate-100"
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
                className="border rounded-md p-3 mt-2 bg-slate-100"
                placeholder="District"
                type="text"
                defaultValue={currentUser?.data?.district}
                {...register("district", { required: true })}
              />
            </div>
            <div className="flex flex-col mt-3 md:w-1/3">
              <label htmlFor="">Upazila</label>
              <input
                className="border rounded-md p-3 mt-2 bg-slate-100"
                placeholder="Upazila"
                type="text"
                defaultValue={currentUser?.data?.upazila}
                {...register("upazila", { required: true })}
              />
            </div>
            <div className="flex flex-col mt-3 md:w-1/3">
              <label htmlFor="">PostCode/ZIP</label>
              <input
                className="border rounded-md p-3 mt-2 bg-slate-100"
                placeholder="Post Office ZIP Code"
                type="text"
                defaultValue={currentUser?.data?.zipCode}
                {...register("zipCode", { required: true })}
              />
            </div>
          </div>
          {
              UpdatedUser && <p className=" text-green-600 mt-4">Update Was Successful!</p>
          }

          <input 
            className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer"
            type="submit"
            value="Save Changes"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
