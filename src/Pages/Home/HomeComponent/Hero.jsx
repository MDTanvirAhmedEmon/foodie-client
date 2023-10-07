import Header from "../../shared/Header";
import heroImg from "../../../assets/hero-img.png"

const Hero = () => {
    return (
        <div className="lg:h-screen pb-20 md:pb-24 lg:pb-0 bg-primary">
            <Header></Header>
            <div className="container mx-auto ">
                <div className="mt-20 px-3 md:px-0">
                    <div className="w-auto md:w-[550px]">
                        <div>
                            <p className="text-2xl xl:text-3xl font-bold text-white mb-5 md:mb-10">Only $12.99</p>
                            <h1 className="text-[50px] md:text-[80px] xl:text-[120px] font-bold text-white leading-[60px] md:leading-[80px] xl:leading-[100px]">The Smokin Burger</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-10">
                            <div>
                                <div className="bg-secondary rounded-full h-[150px] xl:h-[200px]  w-[150px] xl:w-[200px] flex flex-col items-center justify-center">
                                <span className="text-5xl xl:text-7xl font-bold text-white">20%</span>
                                <p className="text-xl text-white font-bold">DISCOUNT</p>
                                </div>
                            </div>
                            <div className="mt-10 ml-0 lg:ml-10">
                                <p className="text-2xl md:text-3xl lx:text-4xl font-bold text-white">On your first order, if you order online through our App!</p>
                                <button className="mt-10 bg-slate-100 py-3 px-8 shadow-2xl text-secondary font-bold text-xl rounded-full">Order Online</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:absolute top-32 lg:top-40 xl:top-20 right-0 2xl:right-32 mt-10 md:mt-0">
                        <img className="w-[500px] lg:w-[500px] xl:w-[700px] 2xl:w-[900px]" src={heroImg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;