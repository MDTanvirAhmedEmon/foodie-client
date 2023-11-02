import { useGetMyOrderQuery } from "../../redux/features/order/orderApi";
import SingleOrder from "./MyOrderComponent/SingleOrder";



const MyOrder = () => {
    const {data} = useGetMyOrderQuery();
    console.log(data)

    return (
        <div>
            <div className="container mx-auto grid md:grid-cols-2  xl:grid-cols-3 gap-10 justify-center items-center py-10">
                {
                    data?.data?.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                }
            </div>  
        </div>
    );
};

export default MyOrder;