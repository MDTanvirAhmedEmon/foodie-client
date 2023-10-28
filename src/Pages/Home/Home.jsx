import FeaturedProducts from "./HomeComponent/FeaturedProducts";
import Hero from "./HomeComponent/Hero";
import Ingredients from "./HomeComponent/Ingredients";


const Home = () => {
    return (
        <div className="font-poppins">
            <Hero></Hero>
            <FeaturedProducts></FeaturedProducts>
            <Ingredients></Ingredients>
        </div>
    );
};

export default Home;