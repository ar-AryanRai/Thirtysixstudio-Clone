import React, { useEffect, useRef, useState } from "react";
import canvasImages from "../../datas/canvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;

  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + 149,
      duration: 3,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });

    const animation = gsap.from(canvasRef.current, {
      delay: 0.7,
      duration: 0.5,
      opacity: 0,
      scale: 0.6,
      ease: "power2.inOut",
    });

    animation.play();
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImages[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.height = canvas.offsetHeight + "px";
      canvas.style.width = canvas.offsetWidth + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random(0, 1).toFixed(1)}
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${size * 1.4}px`,
        height: `${size * 1.4}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    />
  );
};

export default Canvas;
