import React from "react";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = ({ showCanvas }) => {
  useGSAP(() => {
    gsap.set("nav", {
      backgroundColor: document.body.classList.contains("dark-mode")
        ? "black"
        : "#fff0f5",
    });
  }, []);

  return (
    <nav className="border-b-2 border-[#B9B9BA] fixed top-0 left-0 w-full px-8 flex justify-between items-center h-[7vh] z-[20]">
      <div className="text-xl font-bold h-[100%] flex items-center">
        thirtysixstudios
      </div>

      <ThemeToggle showCanvas={showCanvas} />

      <ul className="flex gap-12 h-[100%]">
        {["What we do", "Who we are", "How we give back", "Talk to us"].map(
          (link, index) => (
            <li
              key={index}
              className="flex items-center h-[100%] hover:border-b-4 "
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-md transition-opacity"
              >
                {link}
              </a>
            </li>
          )
        )}
      </ul>

      <SoundToggle />
    </nav>
  );
};

export default Navbar;
