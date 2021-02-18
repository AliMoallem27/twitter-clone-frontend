import React from "react";
import { ReactSVG } from "react-svg";

import circleIco from "../../assets/images/svg/circle.svg";

function Loading() {
  return (
    <div className="w-full h-28 flex justify-center">
      <div className="mt-7">
        <ReactSVG src={circleIco} className="w-26p animate-spin fill-current text-twitter-blue" />
      </div>
    </div>
  );
}

export default Loading;
