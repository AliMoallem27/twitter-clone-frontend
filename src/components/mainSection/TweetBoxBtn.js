import React from "react";
import { ReactSVG } from "react-svg";

function TweetBoxBtn({ btnIco, counter = 0, secondColor = "blue", status = false, onClick }) {
  return (
    <div>
      <div onClick={onClick} className={`flex items-center bg-transparent transition duration-200 ease-in-out fill-current ${status ? "text-twitter-red" : "text-gray-500"} w-min rounded-full group`}>
        <div className={`p-2 rounded-full group-hover:text-twitter-red group-hover:bg-twitter-red group-hover:bg-opacity-10 `}>
          <ReactSVG src={btnIco} className="w-18.75p" />
        </div>
        {parseInt(counter) >= 1 && <span className={`text-sm group-hover:text-twitter-red`}>{counter}</span>}
      </div>
    </div>
  );
}

// function TweetBoxBtn({ btnIco, counter = 0, secondColor = "blue", status = false, onClick }) {
//   const btnColor = { text: `text-twitter-${secondColor}`, bg: `bg-twitter-${secondColor}` };

//   return (
//     <div>
//       <div onClick={onClick} className={`flex items-center bg-transparent transition duration-200 ease-in-out fill-current ${status ? btnColor.text : "text-gray-500"} w-min rounded-full group`}>
//         <div className={`p-2 rounded-full group-hover:${btnColor.bg} group-hover:${btnColor.bg} group-hover:bg-opacity-10 `}>
//           <ReactSVG src={btnIco} className="w-18.75p" />
//         </div>
//         {parseInt(counter) >= 1 && <span className={`text-sm group-hover:${btnColor.text}`}>{counter}</span>}
//       </div>
//     </div>
//   );
// }

export default TweetBoxBtn;
