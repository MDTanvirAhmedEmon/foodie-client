import { Link } from "react-router-dom";
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

const Header = () => {
    const [menu, setMenu] = useState(false);
    console.log(menu);

  return (
    <div className='bg-transparent z-50'>

      <div className="container mx-auto h-20 px-5 md:px-0">
        <div className="flex items-center h-20 justify-between">
            <Link to={'/'}>
            <h1 className="text-4xl font-bold text-white cursor-pointer">
            FOO<span className="text-secondary">D</span>IE
            </h1></Link>
            {/* desktop navbar */}
            <div className="hidden md:block">
                <nav className="z-50">
                    <ul className="flex space-x-8 text-xl text-white ">
                        <Link to={'/'} className="cursor-pointer" >Home</Link>
                        <Link to={'/our-menu'} className="cursor-pointer" >Our Menu</Link>
                        <Link to={'/'} className="cursor-pointer" >Offers</Link>
                        <Link to={'/'} className="cursor-pointer" >About</Link>
                        <Link to={'/'} className="cursor-pointer" >Contact</Link>
                    </ul>
                </nav>
            </div>
            
            <div className="md:hidden block">
                <Bars3CenterLeftIcon onClick={() => setMenu(!menu)} className="h-7 w-7 text-white" />
            </div>

            <div className={` bg-white absolute top-0 right-0 p-10 w-64 shadow-md pb-20 md:hidden ${menu ? 'block' : 'hidden'} `} >

                <XMarkIcon onClick={() => setMenu(!menu)} className="h-7 w-7 mb-7"/>
                <nav className="">
                        <ul className="flex flex-col space-y-5">
                            <Link to={'/'} className="cursor-pointer" onClick={() => setMenu(!menu)} >Home</Link>
                            <Link to={'/our-menu'} className="cursor-pointer" onClick={() => setMenu(!menu)}>Our Menu</Link>
                            <Link to={'/'} className="cursor-pointer" onClick={() => setMenu(!menu)}>Offers</Link>
                            <Link to={'/'} className="cursor-pointer" onClick={() => setMenu(!menu)}>About</Link>
                            <Link to={'/'} className="cursor-pointer" onClick={() => setMenu(!menu)}>Contact</Link>
                        </ul>
                    </nav>
            </div>
        </div>
        
      </div>

    </div>
  );
};

export default Header;
