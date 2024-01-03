import React from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#3F2020] text-white py-8 md:py-16 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-xl">
        <div>
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="pt-6">Call: +123 400 123</p>
          <p className="py-1">
            Beauty & More
            <br />
            Invest in your skin!
          </p>
          <p className="py-2">Email: choppers@mail.com</p>
          <div className="flex gap-4 py-2">
            <div className="social-icon p-1 bg-[#E9F8F3] rounded-full hover:border-2 border-[#2c1212]">
              <FaFacebookF size={15} style={{ color: "#3F2020", fontSize: '1.5rem' }} />
            </div>
            <div className="social-icon p-1 bg-[#E9F8F3] rounded-full hover:border-2 border-[#2c1212]">
              <FaDribbble size={15} style={{ color: "#3F2020", fontSize: '1.5rem' }} />
            </div>
            <div className="social-icon p-1 bg-[#E9F8F3] rounded-full hover:border-2 border-[#2c1212]">
              <FaLinkedinIn size={15} style={{ color: "#3F2020", fontSize: '1.5rem' }} />
            </div>
            <div className="social-icon p-1 bg-[#E9F8F3] rounded-full hover:border-2 border-[#2c1212]">
              <FaInstagram size={15} style={{ color: "#3F2020", fontSize: '1.5rem' }} />
            </div>
            <div className="social-icon p-1 bg-[#E9F8F3] rounded-full hover:border-2 border-[#2c1212]">
              <FaBehance size={15} style={{ color: "#3F2020", fontSize: '1.5rem' }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Page</h3>
          <ul className="py-6">
            <li className="py-1">About</li>
            <li className="py-1">Services</li>
            <li className="py-1">Prices</li>
            <li className="py-1">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Address</h3>
          <ul className="py-6">
            <li className="py-1">111-111-123</li>
            <li className="py-1">
              1750 Village East Rd, Olympic Valley, California, United States
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">More</h3>
          <ul className="py-6">
            <li className="py-1">Blog</li>
            <li className="py-1">Help us</li>
            <li className="py-1">FAQS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
