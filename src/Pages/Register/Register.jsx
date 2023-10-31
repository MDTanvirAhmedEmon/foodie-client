import { Link, useNavigate } from "react-router-dom";
import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/features/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../redux/features/user/tokenSlice";

const Register = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userToken);
  const { register, handleSubmit } = useForm();
  const [createUser, { data: registerData, error }] = useCreateUserMutation();
  console.log(registerData);
  const dispatch = useDispatch();

  const handleFormData = (data) => {
    const registrationDate = new Date().toISOString();
    const timeAndRole = {
      registrationDate,
      role: "user",
    };
    createUser({ ...data, ...timeAndRole });
    console.log({ ...data, ...timeAndRole });
  };
  if (registerData?.data?.accessToken) {
    dispatch(addToken(registerData?.data?.accessToken));
  }
  if (token) {
    navigate("/");
  }

  return (
    <div>
      <div className="h-20 bg-primary">
        <Header></Header>
      </div>

      <div className="mx-4 md:mx-0">
        <div className=" md:w-[700px] shadow-lg py-8 md:py-20 px-2 md:px-10 mx-auto my-10 md:my-20">
          <h1 className=" text-center text-4xl font-bold mb-10">Register</h1>

          <form
            onSubmit={handleSubmit(handleFormData)}
            className=" w-auto mb-8 px-3 md:px-0 box-border"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">First Name</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Last Name</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-4 mt-3 md:mt-4 ">
              <div className="flex flex-col mt-3 md:w-[196px]">
                <label htmlFor="">Email</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Your Email"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-[196px]">
                <label htmlFor="">Password</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-[196px]">
                <label htmlFor="">Phone</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Your Phone Number"
                  type="phone"
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
                {...register("address", { required: true })}
              />
            </div>

            <div className="flex flex-col md:flex-row  gap-4 mt-3 md:mt-4 ">
              <div className="flex flex-col mt-3 md:w-[196px]">
                <label htmlFor="">District</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="District"
                  type="text"
                  {...register("district", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-[196px]">
                <label htmlFor="">Upazila</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Upazila"
                  type="text"
                  {...register("upazila", { required: true })}
                />
              </div>
              <div className="flex flex-col mt-3 md:w-[196px]">
                <label htmlFor="">PostCode/ZIP</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Post Office ZIP Code"
                  type="text"
                  {...register("zipCode", { required: true })}
                />
              </div>
            </div>
            <p className="text-primary mt-3">{error?.data?.message}</p>

            <div>
              <input
                className=" bg-primary text-white py-3 w-full rounded-md mt-10 text-lg font-bold cursor-pointer mb-8"
                type="submit"
                value="Register"
              />
            </div>
            <p className="ml-3 md:ml-0">
              Already Have An Account?{" "}
              <Link
                to={"/login"}
                className=" text-blue-900 font-semibold md:ml-2"
              >
                {" "}
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
