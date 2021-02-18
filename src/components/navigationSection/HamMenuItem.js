import React from "react";
import { ReactSVG } from "react-svg";

function HamMenuItem({ name, icon }) {
  return (
    <div className="flex items-center mb-6 last:mb-4">
      <ReactSVG src={icon} className="w-17.5p fill-current text-text-gray-one mr-2" />
      <span>{name}</span>
    </div>
  );
}

export default HamMenuItem;
