/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import Header from "../shared/Header";
import CheckoutProductCart from "./CheckoutComponents/CheckoutProductCart";
import { useGetSingleUserQuery } from "../../redux/features/products/productApi";
import { makeEmpty } from "../../redux/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useMakePaymentInitMutation } from "../../redux/features/payment/paymentApi";


const Checkout = () => {
  const [firstNameData, setFirstNameData] = useState('');
  const [lastNameData, setLastNameData] = useState('');
  const [emailData, setEmailData] = useState('');
  const [addressData, setAddressData] = useState('');
  const [cityData, setCityData] = useState('');
  const [sateData, setStateData] = useState('');
  const [postcodeData, setPostcodeData] = useState('');
  const [phoneData, setPhoneData] = useState('');

  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { data:currentUser } = useGetSingleUserQuery();


  const [makePayment,{data:paymentData, isLoading: paymentLoading}] = useMakePaymentInitMutation()
  console.log(paymentData);


  const burgerOrderDate = new Date().toISOString();

  const allOrderInfo = {
    total_amount: total,
    product_name: "burger",
    product_category: "fast food",
    product_profile: "general",
    cus_name: `${firstNameData} ${lastNameData}`,
    cus_email: emailData,
    cus_add1: addressData,
    cus_city: cityData,
    cus_state: sateData,
    cus_postcode: postcodeData,
    cus_country: "Bangladesh",
    cus_phone: phoneData,
    user_id: currentUser?.data?._id,
  };


  const handleFormData = (event) => {
    event.preventDefault();

    const orderData = {
      user: currentUser?.data?._id,
      product: products,
      orderDate: burgerOrderDate,
      orderStatus: "processing",
      totalPrice: total,
    }
    makePayment({allOrderInfo, orderData})
  };

  useEffect(() => {
    if (paymentData && paymentData.data && paymentData.data.url) {
      dispatch(makeEmpty());
      window.location.href = paymentData.data.url;
    }
  }, [paymentData, dispatch]);
  

  if(paymentLoading){
    return <div className="h-screen"> <p className="text-xl text-center mt-14">Loading...</p></div>
  }


  return (
    <div>
      <div className="h-20 bg-primary">
        <Header></Header>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-8 md:py-16">
        <div className=" w-auto xl:w-2/3 px-3 md:px-5">
          <p className="text-3xl font-bold mb-6 ">Billing details</p>

          <form onSubmit={handleFormData} className="w-auto px-3 md:px-0">
          <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">First Name</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => setFirstNameData(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Last Name</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => setLastNameData(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-4 mt-3 md:mt-4 ">
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Email</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Your Email"
                  type="email"
                  onChange={(e) => setEmailData(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/2">
                <label htmlFor="">Phone</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Your Phone Number"
                  type="phone"
                  onChange={(e) => setPhoneData(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="">Address</label>
              <input
                className="border rounded-md p-3 mt-2 "
                placeholder="Address In Detail"
                type="text"
                onChange={(e) => setAddressData(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col md:flex-row  gap-4 mt-3 md:mt-4 ">
              <div className="flex flex-col mt-3 md:w-1/3">
                <label htmlFor="">District</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="District"
                  type="text"
                  onChange={(e) => setStateData(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/3">
                <label htmlFor="">Upazila</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Upazila"
                  type="text"
                  onChange={(e) => setCityData(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mt-3 md:w-1/3">
                <label htmlFor="">PostCode/ZIP</label>
                <input
                  className="border rounded-md p-3 mt-2 "
                  placeholder="Post Office ZIP Code"
                  type="text"
                  onChange={(e) => setPostcodeData(e.target.value)}
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
              <p className="text-xl font-bold mt-4">
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
