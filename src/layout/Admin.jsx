import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./AdminLayoutComponents/Sidebar";
import {
  Bars3CenterLeftIcon,
  XMarkIcon,
  TvIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { MobileSidebarMenu } from "./AdminLayoutComponents/MobileSidebarMenu";

const Admin = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="">
      <div className="z-50 md:fixed left-0 top-0 right-0 h-12 flex items-center justify-between shadow-md bg-primary w-full">
        <div className="flex items-center">
          <h1 className="ml-3 md:ml-9 text-2xl font-bold text-white cursor-pointer">
            FOO<span className="text-secondary">D</span>IE

          </h1>
          <div className="hidden md:block">
          <Link target="_blank" to={`/`}><div className="flex items-center ml-10 cursor-pointer  text-white rounded-md ">
              <TvIcon className="h-5 w-5 font-bold mr-2"></TvIcon>
              <p className="text-sm">Live Site</p>
            </div>
            </Link>
            </div>
        </div>

        <div className="mr-4 md:mr-0 block md:hidden text-white">
          <Bars3CenterLeftIcon
            onClick={() => setMenu(!menu)}
            className="h-6 w-6 font-bold"
          ></Bars3CenterLeftIcon>
        </div>
      </div>
      {/* Mobile */}

      <div
        className={` w-auto bg-white absolute  md:hidden  right-0 duration-100 ${
          menu ? `top-[0px]` : `top-[-450px]`
        }`}
      >
        <div className="flex justify-end mr-4 mt-2">
          <XMarkIcon
            onClick={() => setMenu(!menu)}
            className="h-8 w-8 block"
          ></XMarkIcon>
        </div>
        <div className="">
          <MobileSidebarMenu setMenu={setMenu} menu={menu}></MobileSidebarMenu>
        </div>
      </div>
      {/* desktop */}

      <div className="flex">
        <div className=" fixed left-0 top-12 bottom-0 hidden md:block">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full mt-2 md:mt-14 mx-3 md:mx-0 md:ml-72">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin;

// ${
//   menu ? "block" : "hidden"
// }
