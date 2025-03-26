import React from "react";
import ShowCanvas from "../generals/ShowCanvas";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    gsap.from(".right .topic, .left", {
      scrollTrigger: {
        trigger: ".right .topic",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".right p", {
      scrollTrigger: {
        trigger: ".right",
        start: "top 45%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  });

  return (
    <div className="w-full h-[100vh] gap-20 flex relative justify-center pt-40 mb-20">
      <div className="left w-[20%] h-[8%] bg-[transparent] flex  text-xl gap-4 pt-2">
        <div>01</div>
        <div className="w-[40px] h-[0.5px] border-2 mt-[4%]"></div>
        <div>WHAT WE DO</div>
      </div>

      <div className="right w-[25%] h-[75%] flex flex-col justify-between">
        <div className="topic text-4xl">
          We aim to elevate digital production in the advertising space,
          bringing your ideas to life.
        </div>

        <div>
          <p className="mb-[25px]">
            As a contemporary studio, we use cutting-edge design practices and
            the latest technologies to deliver current digital work.
          </p>

          <p>
            Our commitment to innovation and simplicity, paired with our agile
            approach, ensures your journey with us is smooth and enjoyable from
            start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
