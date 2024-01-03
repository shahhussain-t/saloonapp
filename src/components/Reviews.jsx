import React from "react";
import cta from "../assets/Ourstory.png";
const Reviews = () => {
  return (
    <div className="bg-[#ECD8BD] px-16">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center px-4 md:px-0">
        <img src={cta} />
        <div>
          <h1 className="py-4 text-3xl text-[#7D5620] font-bold">
            Review From Our Customer
          </h1>
          <p className="py-2 text-justify px-4">
            My visit to this saloon was an absolute delight! The stylist gave me
            the most amazing haircut, perfectly capturing my vision. The salon's
            ambiance is luxurious, and the staff is friendly and professional. I
            left feeling like a new person, and I can't wait to return. Thank
            you  for the incredible experience!
          </p>
          <div className=" font-extrabold px-4">
            <p >
              Emily Brenda <br />
              Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
