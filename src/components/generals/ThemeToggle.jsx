import React, { useState } from "react";
import "../../styling/ThemeToggle.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ThemeToggle = ({ showCanvas }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
    console.log(document.body.classList);
  };

  useGSAP(() => {
    if (document.body.classList.contains("dark-mode")) {
      gsap.to("body", {
        backgroundColor: "black",
        duration: 0.6,
        color: "white",
        ease: "power2.inOut",
        onUpdate: () => {
          gsap.set("nav", {
            delay: 0.15,
            backgroundColor: showCanvas ? "#fd2c2a" : "black",
          });
        },
      });

      gsap.to(".textcontainer svg text", {
        fill: "white",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(".sound svg circle", {
        stroke: "white",
        fill: "transparent",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(".sound svg path", {
        stroke: "white",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.set("nav ul li", {
        borderColor: "white",
      });
    } else {
      gsap.to("body", {
        backgroundColor: "#FFF0F5",
        duration: 0.6,
        color: "black",
        ease: "power2.inOut",
        onUpdate: () => {
          gsap.set("nav", {
            delay: window.scrollY == 0 ? 0.2 : 0.5,
            backgroundColor: showCanvas ? "#FD2C2A" : "#fff0f5",
          });
        },
      });

      gsap.to(".textcontainer svg text", {
        fill: "black",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(".sound svg circle", {
        stroke: "black",
        fill: "transparent",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(".sound svg path", {
        stroke: "black",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.set("nav ul li", {
        borderColor: "#FD2C2A",
      });
    }
  }, [isDarkMode, document.body.classList]);

  return (
    <button
      className={`theme-toggle ${
        isDarkMode ? "dark" : "light"
      } bg-[transparent]`}
      onClick={toggleTheme}
    >
      <div className="toggle-circle bg-[transparent]">
        {isDarkMode ? (
          <span className="moon text-sm">🌙</span>
        ) : (
          <span className="sun text-sm">☀️</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
