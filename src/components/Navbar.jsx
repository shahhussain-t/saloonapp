import React, { useState } from "react";
import { logo, lock } from "../assets";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[60px] text-white bg-[#3F2020] px-16">
      <div className="md:max-w-[1480px] max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <img src={logo} className="h-[25px]" alt="Logo" />

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 font-bold">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Services">SERVICES</Link>
            <Link to="/Contact">CONTACT</Link>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="flex items-center font-bold bg-transparent gap-2">
            <img src={lock} alt="Lock Icon" />
            <Link to="/Login">Login</Link>
          </button>
          <button className="px-5 py-1 border-2 rounded-3xl text-white font-bold whitespace-nowrap">
            <Link to="/Appointment">Appointment</Link>
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {toggle ? (
            <FiX className="font-bold text-3xl" />
          ) : (
            <FiMenu className="font-bold text-3xl" />
          )}
        </div>
      </div>

      <div
        className={`${
          toggle ? "block" : "hidden"
        } md:hidden absolute z-10 p-4 bg-[#3F2020] w-full`}
      >
        <ul className="space-y-4">
          <li className="p-4 font-bold hover:bg-gray-100 hover:text-[#3F2020]">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-4 font-bold hover:bg-gray-100 hover:text-[#3F2020]">
            <Link to="/About">ABOUT</Link>
          </li>
          <li className="p-4 font-bold hover:bg-gray-100 hover:text-[#3F2020]">
            <Link to="/Services">SERVICES</Link>
          </li>
          <li className="p-4 font-bold hover:bg-gray-100 hover:text-[#3F2020]">
            <Link to="/Contact">CONTACT</Link>
          </li>

          <div className="space-y-4">
            <button className="border-2 flex items-center gap-2 px-5 py-1 rounded-3xl">
              <Link to="/Login">Login</Link>
            </button>
            <button className="px-5 py-1 border-2 rounded-3xl text-white font-bold">
              <Link to="/Appointment">Appointment</Link>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
