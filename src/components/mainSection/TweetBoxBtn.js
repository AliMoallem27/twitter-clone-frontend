import React from "react";
import { ReactSVG } from "react-svg";

function TweetBoxBtn({ btnIco, counter = 0, secondColor = "blue", status = false, onClick }) {
  return (
    <div>
      <div onClick={onClick} className={`flex items-center bg-transparent transition duration-200 ease-in-out fill-current ${status ? `text-twitter-${secondColor}` : "text-gray-500"} w-min rounded-full group`}>
        <div className={`p-2 rounded-full ${`group-hover:bg-twitter-${secondColor} group-hover:text-twitter-${secondColor}`} group-hover:bg-opacity-10 `}>
          <ReactSVG src={btnIco} className="w-18.75p" />
        </div>
        {parseInt(counter) >= 1 && <span className={`text-sm ${`group-hover:text-twitter-${secondColor}`}`}>{counter}</span>}
      </div>
    </div>
  );
}

export default TweetBoxBtn;
