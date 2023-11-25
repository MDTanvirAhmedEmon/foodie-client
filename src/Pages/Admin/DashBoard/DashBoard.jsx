import { Link } from "react-router-dom";
import LatestSingleProduct from "./DashBoardComponents/LatestSingleProduct";

const DashBoard = () => {
  return (
    <div className="my-6 md:mx-3 ">
      <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 ">
        <div className="w-auto h-[300px] bg-blue-gray-50 shadow"></div>
        <div className="w-auto h-[300px] bg-blue-gray-50 shadow"></div>
        <div className="w-auto h-auto mb-10">
          <div className="mb-6">
            <p className="text-3xl font-bold mb-2">Latest Order</p>
            <LatestSingleProduct></LatestSingleProduct>
          </div>
          <Link
            className="bg-primary cursor-pointer text-white px-4 py-3 rounded shadow"
            to={"/admin-panel/orders"}
          >
            View All Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
