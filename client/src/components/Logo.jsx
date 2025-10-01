"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // navigate to home
  };

  return (
    <div
      className="text-xl cursor-pointer"
      onClick={handleClick}
    >
      Logo
    </div>
  );
};

export default Logo;
