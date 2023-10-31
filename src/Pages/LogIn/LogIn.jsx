import { Link } from "react-router-dom";
import Header from "../shared/Header";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { register, handleSubmit } = useForm();

  const handleFormData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="h-20 bg-primary">
        <Header></Header>
      </div>

      <div className="mx-4 md:mx-0">
        <div className=" md:w-[500px] shadow-lg py-8 md:py-20 px-2 md:px-10 mx-auto my-10 md:my-20">
          <h1 className=" text-center text-4xl font-bold mb-10">Log In</h1>
          <form
            onSubmit={handleSubmit(handleFormData)}
            className=" w-auto mb-8 px-3 md:px-0 box-border"
          >
            <div className="flex flex-col mt-3">
              <label htmlFor="">Email</label>
              <input
                className="border rounded-md p-3 mt-2 "
                placeholder="Your Email"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="">Password</label>
              <input
                className="border rounded-md p-3 mt-2 "
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <input
                className=" bg-primary text-white py-3 w-full rounded-md mt-10 text-lg font-bold cursor-pointer mb-8"
                type="submit"
                value="Log In"
              />
            </div>
            <p className="ml-3 md:ml-0">
              Already Have An Account?{" "}
              <Link
                to={"/register"}
                className=" text-blue-900 font-semibold md:ml-2"
              >
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
