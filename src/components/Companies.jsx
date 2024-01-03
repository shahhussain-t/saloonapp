import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from '../assets';

const Companies = () => {
  return (
    <div className="w-full bg-[#ECD8BD] py-12 px-4 md:px-16">
      <div className="md:max-w-[1480px] mx-auto max-w-screen-lg">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#536E96]">
          More than <span className="text-[#7D5620]">2400+</span> teams worldwide rely on our expertise
        </h1>
        <p className="text-[#5a7194] text-lg md:text-xl mt-4 text-justify">
          Prominent organizations leverage our courses to ensure their employees' skills stay up-to-date.
        </p>
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CompanyLogo src={companyLogo1} />
            <CompanyLogo src={companyLogo2} />
            <CompanyLogo src={companyLogo3} />
            <CompanyLogo src={companyLogo4} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyLogo = ({ src }) => (
  <div className="p-4">
    <img src={src} alt="Company Logo" className="mx-auto max-h-24" />
  </div>
);

export default Companies;
