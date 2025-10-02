"use client";

import React from "react";

const Marquee = ({
  items ,
  className = "",
  itemClassName = "",
  direction = "left",
  speed = 30,
}) => {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  const marqueeStyle = {
    animation: `marqueeScroll ${speed}s linear infinite`,
    animationDirection: animationDirection,
  };

  return (
    <>
      <style>
        {`
          @keyframes marqueeScroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div className={`relative flex overflow-hidden w-full ${className}`}>
        {/* First track */}
        <div
          className="flex shrink-0"
          style={marqueeStyle}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-6 flex items-center justify-center whitespace-nowrap ${itemClassName}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Second track (for seamless loop) */}
        <div
          className="flex shrink-0"
          style={marqueeStyle}
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <div
              key={`clone-${index}`}
              className={`p-6 flex items-center justify-center whitespace-nowrap ${itemClassName}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
