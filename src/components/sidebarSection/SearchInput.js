import React, { useState } from "react";
import searchIco from "../../assets/images/svg/search.svg";
import { ReactSVG } from "react-svg";

// This component is used as the right sidebar (SideBar) search box
function SearchInput() {
  let [inputStyle, setInputStyle] = useState("UNFOCUSED");

  return (
    <section className="lg:w-300p xl:w-350p">
      <input dir="auto" type="text" onFocus={() => setInputStyle("FOCUSED")} onBlur={() => setInputStyle("UNFOCUSED")} className="w-full outline-none font-two-sided border-1 border-transparent bg-search-box focus:bg-white focus:border-twitter-blue rounded-full h-11 p-2 pr-4 pl-12" placeholder="Search Twitter" />
      <div className="relative z-10 bottom-8 left-3 inline-block">
        <ReactSVG src={searchIco} className={`w-5 fill-current ${inputStyle === "FOCUSED" ? "text-twitter-blue" : "text-gray-500"} cursor-pointer`} />
      </div>
    </section>
  );
}

export default SearchInput;
