/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import {
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
} from "../../../redux/features/order/orderApi";
import UpdateSingleOrder from "./OrderComponents/UpdateSingleOrder";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const UpdateOrder = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleOrderQuery(id);

  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    if (data && data?.data && data?.data?.orderStatus) {
      setSelectedStatus(data?.data?.orderStatus.toLowerCase());
    }
  }, [data]);

  const [updateOrder, { data: updatedData }] = useUpdateOrderMutation();


  const handleSelectedStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    const updatedStatusData = {
      id: id,
      data: {
        orderStatus: e.target.value,
      },
    };

    updateOrder(updatedStatusData);
  };

  if (isLoading) {
    return (
      <div className="my-20 ">
        <Spinner className="h-10 w-10 mx-auto" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col xl:flex-row mt-10 md:ml-0 xl:ml-8 md:mr-4">
        <div>
          <div className=" bg-blue-gray-50 p-8 shadow-md xl:w-[400px]">
            <p className="mb-2 font-bold">
            Order Date: {new Date(data?.data?.orderDate).getDate()}/
              {new Date(data?.data?.orderDate).getMonth() + 1}/
              {new Date(data?.data?.orderDate).getFullYear()}
            </p>
            <h4 className=" mb-2 text-xl font-bold">Customer Info:</h4>
            <p>
              Name: {data?.data?.user?.firstName} {data?.data?.user?.lastName}
            </p>
            <p>email: {data?.data?.user?.email}</p>
            <p>phone: {data?.data?.user?.phone}</p>
            <p>Address: {data?.data?.user?.address}</p>
          </div>
          <div className=" bg-blue-gray-50 p-8 mt-8 shadow-md  xl:w-[400px]">
            <p className="mt-4 mb-2 text-xl font-bold">Address in details:</p>
            <p>District: {data?.data?.user?.district}</p>
            <p>Upazila: {data?.data?.user?.upazila}</p>
            <p>Zip Code: {data?.data?.user?.zipCode}</p>
          </div>
        </div>
        <div className=" bg-blue-gray-50 p-8 xl:ml-8 w-full xl:mr-8 mt-8 xl:mt-0 shadow-md">
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8">
            {data?.data?.product?.map((product) => (
              <UpdateSingleOrder
                key={product._id}
                product={product}
              ></UpdateSingleOrder>
            ))}
          </div>
          <p className="mt-8 font-bold text-xl">
            Total Price: ${data?.data?.totalPrice}
          </p>
        </div>
      </div>
      <div className="w-48 ml-8 mt-8">
        <p className="text-xl font-bold mb-3">Update Status</p>
        <select
          label="Status"
          value={selectedStatus}
          onChange={handleSelectedStatusChange}
          className="border rounded border-gray-700 py-2 px-5 cursor-pointer"
          disabled={
            data?.data?.orderStatus &&
            data?.data?.orderStatus.toLowerCase() === "delivered"
          }
        >
          <option className=" cursor-pointer" value="pending">
            Pending
          </option>
          <option className=" cursor-pointer" value="processing">
            Processing
          </option>
          <option className=" cursor-pointer" value="delivered">
            Delivered
          </option>
          <option className=" cursor-pointer" value="cancel">
            Cancel
          </option>
        </select>
      </div>
    </div>
  );
};

export default UpdateOrder;
