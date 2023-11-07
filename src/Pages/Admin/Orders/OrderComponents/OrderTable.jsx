import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,

} from "@material-tailwind/react";
import userImage from "../../../../assets/user2.png";
import { useGetAllOrderQuery } from "../../../../redux/features/order/orderApi";
import { Pagination } from "./Pagination";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";


const TABLE_HEAD = [
  "Product Name",
  "Amount",
  "Date",
  "Status",
  "Customer",
  "Details",
];

export function OrderTable() {
  const [active, setActive] = useState(1);
  console.log(active);
  const { data, isLoading } = useGetAllOrderQuery(active);
  if (isLoading) {
    return <h1 className="py-10 text-center">Loading...</h1>;
  }

  console.log(data);
  const totalData = data?.meta?.total;
  console.log(totalData);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center pr-8"> 
        <div>
          <p>Order</p>
        </div>
        <div className="w-72">
        <Select label="Filter By Status">
          <Option>Pending</Option>
          <Option>Processing</Option>
          <Option>Delivered</Option>
        </Select>
      </div>
      </div>

      <Card className="h-full w-full rounded-none">
        <CardBody className="overflow-scroll px-0 z-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map(
                (
                  { user, product, orderDate, orderStatus, totalPrice,_id },
                  index
                ) => {
  
                  const isLast = index === data?.data?.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr   key= {_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={product[0].imageUrl}
                            alt={product[0].title}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {product[0].title}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          ${totalPrice}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {new Date(orderDate).getDate()}/
                          {new Date(orderDate).getMonth() + 1}/
                          {new Date(orderDate).getFullYear()}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={orderStatus}
                            color={
                              orderStatus === "delivered"
                                ? "green"
                                : orderStatus === "processing"
                                ? "amber"
                                : orderStatus === "pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="">
                            <Avatar
                              src={userImage}
                              alt={user?.lastName}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {user?.firstName} {user?.lastName}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {user?.address}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit And Update Status">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <div className="my-8">
          <Pagination
            setActive={setActive}
            active={active}
            totalData={totalData}
          ></Pagination>
        </div>
      </Card>
    </div>
  );
}
