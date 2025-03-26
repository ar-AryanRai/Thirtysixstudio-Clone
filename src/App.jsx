import React, { useEffect, useRef, useState } from "react";
import "./styling/index.css";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MouseFollow from "./components/generals/MouseFollow";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Navbar from "./components/generals/Navbar";
import ShowCanvas from "./components/generals/ShowCanvas";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [isActive]);

  useGSAP(() => {
    document.querySelector(".company-name").addEventListener("click", (e) => {
      setIsActive(!isActive);

      gsap.set(".growing", {
        top: e.clientY + window.scrollY,
        left: e.clientX,
      });

      if (!isActive) {
        gsap.to(".growing", {
          scale: 1000,
          duration: 0.55,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set("nav", {
              backgroundColor: document.body.classList.contains("dark-mode")
                ? "black"
                : "#fff0f5",
            });
          },
        });
        gsap.to("nav", {
          backgroundColor: "#fd2c2a",
          duration: 0.55,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(".growing", {
          delay: -0.5,
          scale: 0,
          duration: 1.05,
          ease: "power2.inOut",
        });
        gsap.to("nav", {
          backgroundColor: document.body.classList.contains("dark-mode")
            ? "black"
            : "#fff0f5",
          duration: 0.55,
          ease: "power2.inOut",
        });
      }
    });
  }, [isActive]);

  return (
    <>
      {/* the component that follow the mouse when it moves (the circle and the text before the first click) */}
      <MouseFollow />

      {/* it is the element that grows when the mouse is clicked on the company name to toggle to new bold design */}
      <span className="growing fixed   rounded-full -top-10 left-0 w-[20px] h-[20px] bg-[#fd2c2a]"></span>

      {/* navbar */}
      <Navbar showCanvas={isActive} />

      {/* page1 */}
      <ShowCanvas isActive={isActive} index={0} />
      <Home isActive={isActive} />

      {/* page2 */}
      <ShowCanvas isActive={isActive} index={1} />
      <Work />
    </>
  );
};
export default App;
