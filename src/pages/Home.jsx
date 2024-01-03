import React from "react";
import {
  Hero,
  Navbar,
  Companies,
  Femaleservices,
  Achievement,
  Maleservices,
  Footer,
  Reviews,
  
} from "../components";
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Maleservices/>
      <Femaleservices/>
      <Achievement/>
      <Companies/>
      <Reviews/>
      <Footer/>
    </>
  );
};

export default Home;
