import React from "react";
import TextContainer from "../page1/TextContainer";
import CompanyName from "../page1/CompanyName";
import ShowCanvas from "../generals/ShowCanvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = ({ isActive }) => {
  useGSAP(() => {
    gsap.from("nav", {
      opacity: 0,
      duration: 1.25,
      ease: "power2.inOut",
    });

    gsap.from(".textcontainer", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power2.inOut",
    });

    gsap.from(".company-name span", {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.05,
    });
  });

  return (
    <div className="w-full min-h-screen relative z-[1] relative top-0">
      <TextContainer />

      <CompanyName />
    </div>
  );
};

export default Home;
