import { useGetMyOrderQuery } from "../../redux/features/order/orderApi";
import SingleOrder from "./MyOrderComponent/SingleOrder";



const MyOrder = () => {
    const {data, isLoading} = useGetMyOrderQuery();
    if(isLoading){
        return <div className="h-screen"> <p className="text-xl text-center mt-14">Loading...</p></div>
    }
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