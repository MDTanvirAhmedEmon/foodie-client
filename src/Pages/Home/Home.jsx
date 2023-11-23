import FeaturedProducts from "./HomeComponent/FeaturedProducts";
import Hero from "./HomeComponent/Hero";
import Ingredients from "./HomeComponent/Ingredients";
import Testimonial from "./HomeComponent/Testimonial";


const Home = () => {
    return (
        <div className="font-poppins">
            <Hero></Hero>
            <FeaturedProducts></FeaturedProducts>
            <Ingredients></Ingredients>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;