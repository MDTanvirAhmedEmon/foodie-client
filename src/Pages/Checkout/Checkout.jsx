import { useSelector } from "react-redux";
import Header from "../shared/Header";
import CheckoutProductCart from "./CheckoutComponents/CheckoutProductCart";

const Checkout = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="h-20 bg-primary">
        <Header></Header>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-10">
        <div className=" w-auto xl:w-2/3 px-3 md:px-0">
          <p className="text-3xl font-bold mb-6 ">Billing details</p>
          <form className="w-auto px-3 md:px-0">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="FName">First Name:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  name="name"
                  id=""
                  required
                />
              </div>

              <div className="flex flex-col md:w-1/2 mt-6 md:mt-0">
                <label htmlFor="LName">Last Name:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  name="LName"
                  id=""
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="email">Email:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="email"
                name="email"
                id=""
                required
              />
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="phone">Phone:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="number"
                name="phone"
                id=""
                required
              />
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="address">Address:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                name="address"
                id=""
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="flex flex-col  md:w-1/3 ">
                <label htmlFor="district">District:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  name="district"
                  id=""
                  required
                />
              </div>

              <div className="flex flex-col md:w-1/3 mt-7 md:mt-0">
                <label htmlFor="upazila">Upazila:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  name="upazila"
                  id=""
                  required
                />
              </div>

              <div className="flex flex-col md:w-1/3 mt-7 md:mt-0">
                <label htmlFor="zip">PostCode/ZIP:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="number"
                  name="zip"
                  id=""
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-3xl font-bold mt-6">Payment </p>
            </div>
            <div className="2xl:border-l-2 pb-6 md:pl-10 2xl:pl-0 px-3 md:px-0 mt-5 md:mt-0 block md:hidden">
              {products.map((product) => (
                <CheckoutProductCart
                  key={product._id}
                  product={product}
                ></CheckoutProductCart>
              ))}
              <p className="text-xl font-bold mt-4 ml-12">
                Total: ${total.toFixed(2)}
              </p>
            </div>
            <input
              className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer"
              type="submit"
              value="Make Order"
            />
          </form>
        </div>

        <div className="2xl:border-l-2 pb-10 md:pl-10 2xl:pl-0 px-3 md:px-0 mt-5 md:mt-0 hidden md:block">
          {products.map((product) => (
            <CheckoutProductCart
              key={product._id}
              product={product}
            ></CheckoutProductCart>
          ))}
          <p className="text-xl font-bold mt-4 ml-12">
            Total: ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
