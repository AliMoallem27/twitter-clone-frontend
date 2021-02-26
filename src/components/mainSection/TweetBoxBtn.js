import React from "react";
import { ReactSVG } from "react-svg";

function TweetBoxBtn({ btnIco, counter = 0, secondColor = "blue", status = false, onClick }) {
  const textColor = secondColor === "red" ? "text-twitter-red" : secondColor === "green" ? "text-twitter-green" : "text-twitter-blue";
  const textColorHover = secondColor === "red" ? "group-hover:text-twitter-red" : secondColor === "green" ? "group-hover:text-twitter-green" : "group-hover:text-twitter-blue";
  const bgColorHover = secondColor === "red" ? "group-hover:bg-twitter-red" : secondColor === "green" ? "group-hover:bg-twitter-green" : "group-hover:bg-twitter-blue";

  // this component needs refactor
  return (
    <div>
      <div onClick={onClick} className={`flex items-center bg-transparent transition duration-200 ease-in-out fill-current ${status ? textColor : "text-gray-500"} w-min rounded-full group`}>
        <div className={`p-2 rounded-full ${textColorHover} ${bgColorHover} group-hover:bg-opacity-10 `}>
          <ReactSVG src={btnIco} className="w-18.75p" />
        </div>
        {parseInt(counter) >= 1 && <span className={`text-sm ${textColorHover}`}>{counter}</span>}
      </div>
    </div>
  );
}

export default TweetBoxBtn;
