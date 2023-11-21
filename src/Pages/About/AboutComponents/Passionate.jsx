import bgImage from "../../../assets/bg-about.jpg";

const Passionate = () => {
  const bgStyle = {
    backgroundImage: `URL(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "800px",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={bgStyle}>
      <div className="bg-[#0000009d] h-full">
        <div className="md:container mx-3 md:mx-auto h-full text-white flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center">We’re passionate about our food</h1>
          <p className="font-bold text-xl md:text-3xl mt-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-xl mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Passionate;
