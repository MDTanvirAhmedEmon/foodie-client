import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="py-16 lg:py-24 border-zinc-800 custom-border-bottom">
        <div className="container mx-auto flex flex-col text-center md:flex-row justify-between">
          <ul className="space-x-3 md:space-x-8 text-sm md:text-lg font-bold mx-auto">
            <Link>Home</Link>
            <Link>Our Menu</Link>
            <Link>Offers</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </ul>
          <div className="flex space-x-5 md:space-x-8 mx-auto mt-5 md:mt-0">
            <span className="bg-secondary hover:bg-primary cursor-pointer p-2">
              <FaFacebook className="  h-7 w-7  text-white" />
            </span>
            <span className="bg-secondary hover:bg-primary cursor-pointer p-2">
              <FaInstagram className="  h-7 w-7  text-white" />
            </span>
            <span className="bg-secondary hover:bg-primary cursor-pointer p-2">
              <FaTwitter className="  h-7 w-7  text-white" />
            </span>
          </div>
        </div>
      </div>
      <div className="py-6 md:py-7">
        <h1 className="text-center text-md md:text-lg font-bold">
          Copyright © 2023 Fast Food Restaurant
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
