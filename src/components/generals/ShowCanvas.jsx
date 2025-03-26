import React from "react";
import Canvas from "./Canvas";
import data from "../../datas/data";

const ShowCanvas = ({ isActive, index }) => {
  return (
    <div className="absolute min-h-screen w-full">
      {isActive
        ? data[index].map((canvasdet, index) => (
            <Canvas details={canvasdet} key={index} />
          ))
        : null}
    </div>
  );
};

export default ShowCanvas;
