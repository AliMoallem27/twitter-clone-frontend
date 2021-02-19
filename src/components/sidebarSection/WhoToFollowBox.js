import React from "react";

// This component represents the person(follow recommend) of SideBarBox
function WhoToFollowBox({ title, username, avatar }) {
  return (
    <section className="flex py-3 px-4 border-b-1 border-gray-200 hover:bg-sidebar-box-hover cursor-pointer transition duration-200">
      <figure className="w-49p mr-4">
        <img src={avatar} alt="for-later" className="w-49p rounded-full" />
      </figure>
      <div className="flex flex-col">
        <span className="font-segoe-bold relative top-0.5">{title}</span>
        <span className="relative bottom-0.5 text-text-gray-one">{username}</span>
      </div>
      <div className="self-center ml-auto">
        <button className="bg-transparent border-1 border-twitter-blue px-4 font-segoe-bold text-twitter-blue rounded-full hover:bg-twitter-blue hover:bg-opacity-10 transition duration-100">Follow</button>
      </div>
    </section>
  );
}

export default WhoToFollowBox;
