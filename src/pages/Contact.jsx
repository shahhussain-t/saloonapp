import React from "react";
import { Footer, Navbar } from "../components";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 my-5 bg-white rounded-lg shadow-lg">
        <div className="lg:flex lg:flex-row items-center justify-between">
          <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
            <div className="text-center">
              <i className="fas fa-map-marker-alt text-4xl text-gray-700 mb-2"></i>
              <div className="text-xl font-semibold">Address</div>
              <div className="text-gray-600">1750 Village East Rd, USA</div>
              <div className="text-gray-600">198 City West Blvd, USA</div>
            </div>
            <div className="text-center mt-8">
              <i className="fas fa-phone-alt text-4xl text-gray-700 mb-2"></i>
              <div className="text-xl font-semibold">Phone</div>
              <div className="text-gray-600">+111-111-123</div>
              <div className="text-gray-600">+111-456-789</div>
            </div>
            <div className="text-center mt-8">
              <i className="fas fa-envelope text-4xl text-gray-700 mb-2"></i>
              <div className="text-xl font-semibold">Email</div>
              <div className="text-gray-600">choppers@gmail.com</div>
              <div className="text-gray-600">careersaloon@gmail.com</div>
            </div>
          </div>
          <div className="lg:w-3/4 w-full ml-0 lg:ml-8">
            <div className="text-3xl font-semibold text-gray-700 mb-4">
              Send us a message
            </div>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to us with any questions, inquiries, or
              project collaborations. We're here to assist you and provide the
              support you need. Send us a message, and we'll get back to you
              promptly.
            </p>
            <form action="#">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-[#3F2020] text-gray-700"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-[#3F2020]  text-gray-700"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your message here"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-[#3F2020] text-gray-700 h-32 resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <input
                  type="button"
                  value="Send Now"
                  className="px-4 py-2 rounded-full bg-[#3F2020] text-white font-semibold hover:bg-[#250f0f] cursor-pointer transition duration-300 sm:px-6 sm:py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
