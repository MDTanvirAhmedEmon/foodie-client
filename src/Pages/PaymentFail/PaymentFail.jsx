import { Link } from "react-router-dom";
import Header from "../shared/Header";


const PaymentFail = () => {
    return (
        <div>
            <div className="h-20 bg-primary">
                <Header></Header>
            </div>
            <div className="container mx-auto flex justify-center items-center py-44 md:py-56">
                <div className="text-center">
                    <h1 className="text-5xl md:text-8xl font-bold  text-primary mb-6" >Payment Failed</h1>
                    <p className="text-xl md:text-2xl">For Your Order</p>
                    <p className="text-lg mt-5">Go to <Link to={`/our-menu`} className=" text-white bg-primary py-2 px-4 rounded-md ml-2">Menu</Link></p>
                </div>
            </div>
        </div>
    );
};

export default PaymentFail;