import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Header from "../Pages/shared/Header";
import { removeToken } from "../redux/features/user/tokenSlice";
import { useDispatch } from "react-redux";

const ProfileLayout = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <div className="bg-primary ">
          <div className="container mx-auto h-48 md:h-52 relative">
            <Header></Header>
            <div className=" h-20 md:h-20 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-5xl font-bold text-white">
                My Profile
              </h1>
            </div>
          </div>
        </div>
      <div className=" container mx-auto  gap-5">
        <div className=" text-center mt-5 md:mt-10 flex justify-center">
        <Link to={`/profile`}><p className=" bg-secondary text-sm md:text-md py-2 md:py-3 px-2 md:px-4 rounded-md md:ml-4  mt-3 hover:bg-primary hover:text-white">My Details</p></Link>
        <Link to={`/profile/my-order`}><p className=" bg-secondary text-sm md:text-md py-2 md:py-3 px-2 md:px-4 rounded-md ml-3 md:ml-4  mt-3 hover:bg-primary hover:text-white">Orders</p></Link>
            <p onClick={() => dispatch(removeToken())} className=" cursor-pointer text-sm md:text-md bg-secondary py-2 md:py-3 px-2 md:px-4 rounded-md ml-3 md:ml-4  mt-3 hover:bg-primary hover:text-white">Log Out</p>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
      <div className="fixed bottom-7 right-6 md:bottom-20 md:right-20"></div>
    </div>
  );
};

export default ProfileLayout;
