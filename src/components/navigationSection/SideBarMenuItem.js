import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { NavLink, useLocation } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

function SideBarMenuItem({ ico, icoFilled, text, linkTo, exact, iconColor = "text-black" }) {
  let [iconStyle, setIconStyle] = useState("UNFOCUSED");
  let { height } = useWindowSize();
  let location = useLocation();

  useEffect(() => {
    setIconStyle("UNFOCUSED");
    if (location.pathname === linkTo) setIconStyle("FOCUSED");
  }, [location, linkTo]);

  return (
    <>
      {linkTo && (
        <NavLink to={linkTo} exact={exact} className={`${iconStyle === "FOCUSED" ? "text-twitter-blue" : `text-${iconColor}`} block`}>
          <div className={`p-2 sm:p-2 xl:py-1 xl:pl-3 xl:pr-5 w-min ${height >= 900 ? "sm:mb-4" : height >= 800 ? "sm:mb-3" : height >= 700 ? "sm:mb-2" : "sm:mb-1"} sm:h-46p flex items-center cursor-pointer font-segoe-bold text-lg bg-transparent rounded-full hover:bg-twitter-blue hover:bg-opacity-10 hover:text-twitter-blue group transition duration-200`}>
            <ReactSVG src={icoFilled && iconStyle === "FOCUSED" ? icoFilled : ico} className="w-26.5p xl:mr-5 fill-current group-hover:text-twitter-blue" />
            <span className="hidden xl:inline">{text}</span>
          </div>
        </NavLink>
      )}
      {!linkTo && (
        <div className={`p-2 sm:p-2 xl:py-1 xl:pl-3 xl:pr-5 w-min ${height >= 900 ? "sm:mb-4" : height >= 800 ? "sm:mb-3" : height >= 700 ? "sm:mb-2" : "sm:mb-1"} sm:h-46p flex items-center cursor-pointer font-segoe-bold text-lg bg-transparent rounded-full hover:bg-twitter-blue hover:bg-opacity-10 hover:text-twitter-blue group transition duration-200`}>
          <ReactSVG src={icoFilled && iconStyle === "FOCUSED" ? icoFilled : ico} className="w-26.5p xl:mr-5 fill-current group-hover:text-twitter-blue" />
          <span className="hidden xl:inline">{text}</span>
        </div>
      )}
    </>
  );
}

export default SideBarMenuItem;
