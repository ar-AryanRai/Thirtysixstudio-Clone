import React from "react";
import "../../styling/TextContainer.css";

const TextContainer = () => {
  return (
    <div className="textcontainer flex justify-center gap-40 items-center w-full px-[20%] mt-[10%]">
      <div className="text w-[35%]">
        <h3 className="objective text-3xl leading-[1]">
          At Thirtysixstudio, we build digital assets and immersive experiences
          for purposeful brands.
        </h3>

        <p className="intro text-md w-[100%] mt-8 font-normal">
          We're a boutique production studio focused on design, animation, and
          technology, constantly rethinking what digital craft can do for
          present-day ads and campaigns.
        </p>

        <p className="text-md mt-8">Scroll</p>
      </div>

      {/* text in the circular format */}
      <svg width="250" height="250" viewBox="0 0 300 300">
        <defs>
          <path
            id="circlePath"
            d="
      M 150,150
      m -100,0
      a 100,100 0 1,1 200,0
      a 100,100 0 1,1 -200,0"
          />
        </defs>

        <text
          fontSize="14"
          fontFamily="Arial"
          fontWeight="bold"
          letterSpacing="3"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            — THIRTYSIXSTUDIO — FOR ALL THINGS — DIGITAL PRODUCTION
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TextContainer;
