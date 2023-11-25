import { Card, Spinner, Typography } from "@material-tailwind/react";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";

const TABLE_HEAD = ["Name", "Address", "Email", "Phone"];

 
const Users = () => {
   
    const {data, isLoading} = useGetAllUsersQuery();
    console.log(data);
    
  if (isLoading) {
    return (
      <div className="my-20 ">
        <Spinner className="h-10 w-10 mx-auto" />
      </div>
    );
  }
  return (
    <Card className="h-full overflow-scroll md:mx-3 mt-6 rounded">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
          {data?.data?.map(({ _id,firstName, lastName, email, phone, address }, index) => {
            const isLast = index === data?.data?.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={_id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {firstName} {lastName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {address}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {phone}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Users