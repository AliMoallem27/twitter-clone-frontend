import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import useHambergurMenu from "../../hooks/useHambergurMenu";

function HamMenuItem({ name, icon, linkTo }) {
  let setMenuStatus = useHambergurMenu("SETTER");

  return (
    <Link
      to={linkTo}
      className="flex items-center mb-6 last:mb-4"
      onClick={() => {
        setMenuStatus("CLOSE");
      }}
    >
      {" "}
      <ReactSVG src={icon} className="w-17.5p fill-current text-text-gray-one mr-2" />
      <span>{name}</span>
    </Link>
  );
}

export default HamMenuItem;
