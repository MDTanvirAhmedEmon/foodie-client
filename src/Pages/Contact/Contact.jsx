import Header from "../shared/Header";
import ContactInfo from "./ContactComponents/ContactInfo";
import Map from "./ContactComponents/Map";

const Contact = () => {
  return (
    <div>
      <div className="bg-primary ">
        <div className="container mx-auto h-64 md:h-96 relative">
          <Header></Header>
          <div className="h-32 md:h-64 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold text-white">Contact</h1>
          </div>
        </div>
      </div>

      <div className="bg-[#eeeeee] py-14 lg:py-28">
            <ContactInfo></ContactInfo>
      </div>
      <div className="w-full">
        <Map></Map>
      </div>
    </div>
  );
};

export default Contact;
