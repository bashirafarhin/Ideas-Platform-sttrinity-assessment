import React from "react";

const FeatureCard = ({
  image,
  title,
  link = "#",
  cardClassName = "",
}) => {
  return (
    <a
      href={link}
      className={`group block relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out ${cardClassName}`}
      aria-label={`View ${title} feature`}
    >
      {/* Image Container - 90% height */}
      <div className="relative h-[90%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-0"
        />
        
        {/* Gradient overlay that fades in */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Text Container - 10% height */}
      <div className="relative h-[10%] flex items-center justify-center px-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 text-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:text-blue-600">
          {title}
        </h3>
      </div>

      {/* Hover text that appears over image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none">
        <p className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out px-6 text-center">
          {title}
        </p>
      </div>
    </a>
  );
};

export default FeatureCard;