import Header from "../shared/Header";
import Features from "./AboutComponents/Features";
import Passionate from "./AboutComponents/Passionate";

const About = () => {




  return (
    <div>
      <div className="bg-primary ">
        <div className="container mx-auto h-64 md:h-96 relative">
          <Header></Header>
          <div className="h-32 md:h-64 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold text-white">About</h1>
          </div>
        </div>
      </div>

        <Passionate></Passionate>
        <Features></Features>
    </div>
  );
};

export default About;
