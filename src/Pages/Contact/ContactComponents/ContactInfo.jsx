import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const ContactInfo = () => {

  // Email JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hb0rlgv', 'template_002rt6f', form.current, 'qnRUp2xbFgwWnBw4D')
      .then((result) => {
          if(result){
            toast.success('Email sent successfully')
            form.current.reset();
          }
      }, (error) => {
          if(error){
            toast.error('Something went wrong')
          }
      });
  };


  return (
    <div className="mx-3 md:container md:mx-auto flex flex-col lg:flex-row justify-between ">
      <div className="flex flex-col justify-center mb-8 lg:mb-0">
        <div className="">
          <h3 className="font-bold text-2xl mb-3">Contact info</h3>
          <p className="text-lg">+8801846817009</p>
          <p className="text-lg mt-1">tanviremon726@gmail.com</p>
          <p className="text-lg mt-1">Kalatia, Keraniganj, Dhaka</p>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-2xl mb-3">Opening hours</h3>
          <p className="text-lg">Monday - Friday — 11:00 AM - 11:00 PM</p>
          <p className="text-lg mt-1">Saturday - Sunday — 10:00 AM - 9:00 PM</p>
        </div>
      </div>
      <div>
        <form  ref={form} onSubmit={sendEmail} className="md:w-[600px]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor="">First Name</label>
              <input
                className="border rounded-md p-3 mt-2 "
                placeholder="First Name"
                type="text"
                name="first_name"
              />
            </div>
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor="">Last Name</label>
              <input
                className="border rounded-md p-3 mt-2 "
                placeholder="Last Name"
                type="text"
                name="last_name"
              />
            </div>
          </div>

          <div className="flex flex-col mt-3 ">
            <label htmlFor="">Email</label>
            <input
              className="border rounded-md p-3 mt-2 "
              placeholder="Your Email"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor="">Message</label>
            <textarea
              rows="5"
              cols="100"
              className="border rounded-md p-3 mt-2 "
              placeholder="Your message here..."
              type="text"
              name="message"
            />
          </div>

          <input
            className="bg-primary py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default ContactInfo;
