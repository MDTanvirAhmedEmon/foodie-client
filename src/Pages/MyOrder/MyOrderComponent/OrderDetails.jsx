import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../../redux/features/order/orderApi";
import SingleOrderBurger from "./SingleOrderBurger";

const OrderDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { data } = useGetSingleOrderQuery(id);
  console.log(data);

  const date = new Date(data?.data?.orderDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <div className=" bg-gray-50 mx-3 shadow-md md:mx-0 mt-6 rounded-md p-8 md:mt-10 flex flex-col md:flex-row justify-center gap-10 items-center mb-4 md:mb-10 ">
      <div className="flex flex-col md:flex-row gap-10 ">
        {data?.data?.product.map((pd) => (
          <SingleOrderBurger key={pd._id} product={pd}></SingleOrderBurger>
        ))}
      </div>
      <div className="bg-gray-300 rounded-md p-10 font-semibold">
        <p className="">
          Order Date: {day}/{month}/{year}
        </p>
        <p className="mt-2">Order Status: {data?.data?.orderStatus}</p>
        <p className="mt-2">Destination: {data?.data?.user.address}</p>
        <p className="mt-2">Total Price: {data?.data?.totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
