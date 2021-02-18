import React from "react";
import { ReactSVG } from "react-svg";

import threedotIco from "../../assets/images/svg/threedot.svg";

function AccountInfoBox({ avatar, title, username }) {
  return (
    <section className="sm:w-59p xl:w-255p h-60p flex items-center bg-white hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer xl:p-2 xl:pl-3 rounded-full fixed bottom-2">
      <figure className="mx-auto xl:mr-3 xl:ml-0">
        <img src={avatar} className="w-39p rounded-full" alt="unknown" />
      </figure>
      <div className="hidden xl:flex xl:flex-col">
        <span className="xl:font-segoe-bold xl:text-md">{title}</span>
        <span className="xl:text-md text-text-gray-one">@{username}</span>
      </div>
      <div className="hidden xl:flex xl:items-center xl:ml-auto">
        <ReactSVG src={threedotIco} className="xl:w-18.75p" />
      </div>
    </section>
  );
}

export default AccountInfoBox;
