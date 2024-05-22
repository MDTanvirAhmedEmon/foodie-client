/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDeleteProductMutation } from "../../../../redux/features/products/productApi";
import { Link } from "react-router-dom";

const AdminSingleProduct = ({ product }) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = (id) => {
    console.log(id);
    deleteProduct(id);
  };
  // modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  if (isLoading) {
    return (
      <div className="my-20 ">
        <Spinner className="h-10 w-10 mx-auto" />
      </div>
    );
  }
  return (
    <div className="mx-auto shadow py-6 px-5 rounded-2xl">
      <div>
        <img className="mx-auto" src={product?.imageUrl} alt="" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">{product?.title}</h3>
        <p className="text-lg font-bold text-primary">
          Price: ${product?.price}
        </p>
        <p className="text-md">{product?.description}</p>
        <div className="text-right">
          <Link to={`/admin-panel/update-product/${product._id}`}>
            <p className=" text-blue-600 cursor-pointer font-semibold underline">
              Edit
            </p>
          </Link>
          <p
            onClick={handleOpen}
            className=" text-red-600 cursor-pointer font-semibold underline mt-2"
          >
            DELETE
          </p>
        </div>
      </div>

      {/* modal */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you want to delete?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              handleDeleteProduct(product._id);
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AdminSingleProduct;
