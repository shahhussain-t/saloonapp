import React from "react";
import { achievement } from "../assets";
import { SlPeople, SlDiamond } from "react-icons/sl";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineSafetyDivider } from "react-icons/md";

const Achievement = () => {
  return (
    <div className="w-full bg-[#ECD8BD] py-12 md:py-24 px-4 md:px-16">
      <div className="md:max-w-[1480px] mx-auto md:grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="md:leading-[72px] text-2xl md:text-3xl font-bold">
            Our <span className="text-[#7D5620]">Achievements</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Proudly celebrating our remarkable achievements and turning dreams
            into milestones, one success story at a time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
            <AchievementItem
              icon={<SlDiamond size={30} style={{ color: "#1A906B" }} />}
              count="350+"
              label="Quality Products"
            />
            <AchievementItem
              icon={<GrCertificate size={30} style={{ color: "#FFC27A" }} />}
              count="100+"
              label="Qualified Personnel"
            />
            <AchievementItem
              icon={
                <MdOutlineSafetyDivider size={30} style={{ color: "#ED4459" }} />
              }
              count="1600+"
              label="Employers"
            />
            <AchievementItem
              icon={<SlPeople size={30} style={{ color: "#0075FD" }} />}
              count="10,000+"
              label="Users"
            />
          </div>
        </div>
        <img
          src={achievement}
          alt="Achievement"
          className="mx-auto md:order-last order-first max-w-full"
        />
      </div>
    </div>
  );
};

const AchievementItem = ({ icon, count, label }) => (
  <div className="py-2 flex">
    <div className="p-4 bg-[#E9F8F3] rounded-xl">{icon}</div>
    <div className="px-3">
      <h1 className="text-2xl font-semibold">{count}</h1>
      <p className="text-[#6D737A]">{label}</p>
    </div>
  </div>
);

export default Achievement;
