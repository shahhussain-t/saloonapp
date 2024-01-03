import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <>
    <div className="box w-96 mx-auto relative md:m-4 sm:m-4">
      <div className="front-face bg-white h-56 w-full flex flex-col justify-center shadow-md transition-all duration-500 ease-linear">
        <div className="h-20">{icon}</div>
        <span className="text-2xl font-semibold uppercase text-[#3f2020]  bg-clip-text">
          {title}
        </span>
      </div>
      <div className="back-face absolute top-0 left-0 z-10 h-56 w-full">
        <span className="text-2xl font-semibold uppercase">{title}</span>
        <p className="mt-2.5 text-justify">{description}</p>
        <button className="bg-[#3F2020] text-white p-2 rounded-md m-2">
          <Link to="/Appointment">Take the Service</Link>
        </button>
      </div>
    </div>
    </>
  );
};

export default ServiceCard;
