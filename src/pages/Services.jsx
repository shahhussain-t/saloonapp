import React from "react";
import { GiHairStrands } from "react-icons/gi";
import { CgBoy, CgGirl } from "react-icons/cg";
import { TbMoodBoy } from "react-icons/tb";
import { GiBarbedNails, GiNurseFemale } from "react-icons/gi";
import "./service.css";
import { Footer, Navbar } from "../components";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      icon: <GiHairStrands className="text-6xl mx-auto text-[#3F2020]" />,
      title: "Hair Cuttings",
      description:
        "Haircutting involves skillfully trimming and shaping hair to achieve a specific look or length, enhancing the individual's appearance and style.",
    },
    {
      icon: <CgBoy className="text-6xl mx-auto text-[#3F2020]" />,
      title: "Kids Hair Styling",
      description:
        "Kids' hair styling involves creatively designing and grooming children's hair to enhance their appearance and express their unique personalities.",
    },
    {
      icon: <TbMoodBoy className="text-6xl mx-auto text-[#3F2020]" />,
      title: "A BALD SERVICE",
      description:
        "For bald services, we provide specialized care and grooming for individuals with a bald or shaved head, ensuring a clean and comfortable look.",
    },
    {
      icon: <CgGirl className="text-6xl mx-auto text-[#3F2020]" />,
      title: "Beauty Services",
      description:
        "Our beauty services encompass a range of treatments and procedures to enhance your overall appearance, including skincare, makeup, and more.",
    },
    {
      icon: <GiBarbedNails className="text-6xl mx-auto text-[#3F2020]" />,
      title: "Nail Services",
      description:
        "Discover our nail services for expert care and creativity in nail art, manicures, pedicures, and nail enhancements to elevate your hands and feet.",
    },
    {
      icon: <GiNurseFemale className="text-6xl mx-auto text-[#3F2020]" />,
      title: "Perms and Relaxers",
      description:
        "For perms and relaxers, we offer chemical treatments designed to achieve desired hair textures, from curls to straightening.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-center flex flex-wrap justify-center items-center h-screen mt-200 md:mt-0 md:mx-auto">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default Services;
