import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white/30 backdrop-blur-sm rounded-sm">
      <div className="max-w-[80rem] mx-auto px-4 text-center">
        {/* Main Footer Text */}
        <h1 className="text-gray-500 text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed">
          ST Trinity Property Group
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 mt-4 text-base md:text-lg">
          All rights reserved © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
