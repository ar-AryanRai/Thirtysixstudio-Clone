import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SoundToggle = () => {
  const [isAudio, setIsAudio] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://thirtysixstudio.com/audio/world1.mp3"
      );
      audioRef.current.loop = true;
    }

    const handleFirstClick = (e) => {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsAudio(true);
        gsap.to(".sound-text", {
          opacity: 0,
          duration: 0.6,
        });
      }
      document.body.removeEventListener("click", handleFirstClick);
    };

    document.body.addEventListener("click", handleFirstClick);

    return () => {
      document.body.removeEventListener("click", handleFirstClick);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsAudio(true);
    } else {
      audioRef.current.pause();
      setIsAudio(false);
    }
  };

  return (
    <div
      className="sound cursor-pointer bg-[transparent]"
      onClick={toggleAudio}
    >
      {isAudio ? (
        <svg
          className="on"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            fill="transparent"
            opacity="0.8"
            cx="15"
            cy="15"
            r="14.5"
            stroke="#958a8a"
          ></circle>
          <path
            d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364"
            stroke="black"
          ></path>
        </svg>
      ) : (
        <svg
          className="off"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.8"
            cx="15"
            cy="15"
            r="14.5"
            stroke="#958a8a"
          ></circle>
          <path
            d="M11.9091 14V15M9 14V15M15 14V15M18.0909 14.0002V15M21 14V15"
            stroke="black"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default SoundToggle;
