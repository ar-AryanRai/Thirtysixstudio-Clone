import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollow = () => {
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(".follow-container", {
      opacity: 1,
      x: mouseX,
      y: mouseY + window.scrollY,
      duration: 0.5,
      ease: "sine.out",
    });

    gsap.to(".mouse-follow", {
      transform: "translate(-50%, -50%)",
    });

    gsap.to(".sound-text", {
      transform: "translate(10%, -50%)",
    });
  });

  // Update follow-container on scroll
  window.addEventListener("scroll", () => {
    gsap.to(".follow-container", {
      x: mouseX,
      y: mouseY + window.scrollY,
      duration: 0.5,
      ease: "sine.out",
    });
  });

  return (
    <div className="follow-container pointer-events-none flex relative opacity-0 z-[30] top-0 left-0">
      <div className="mouse-follow w-[20px] mr-10 h-[20px] bg-orange-500 rounded-full absolute top-0 left-0"></div>
      <div className="sound-text text-[#FD2C2A] w-[124px] rounded-lg px-2 absolute top-0 left-0">
        Click for sound
      </div>
    </div>
  );
};

export default MouseFollow;
