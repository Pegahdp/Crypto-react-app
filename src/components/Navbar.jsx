import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const navToggleHandler = () =>{
        setIsNavOpen(!isNavOpen)
    }

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block">
        <Link to="/signin" className="p-4 hover:text-accent">Sign In</Link>
        <Link to="/signup" className="px-5 py-2 bg-button text-btnText ml-2 rounded-md">Sign Up</Link>
      </div>

      {/* Menu Icon */}

      <div onClick={navToggleHandler} className="block md:hidden cursor-pointer">
      {isNavOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}  
      </div>
      {/* Mobile Menu */}
      <div className={
          isNavOpen
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }>
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>

          <li className="border-b py-6">
            <Link to="/">Account</Link>
          </li>

          <li className=" py-6">
            <ThemeToggle />
          </li>
        </ul>

        <div className="w-full flex flex-col p-4 ">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-primary text-primary border border-secondary shadow-md rounded-2xl">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-3 bg-button text-btnText border border-secondary shadow-md rounded-2xl ">Sign Up</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
