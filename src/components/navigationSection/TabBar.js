import React from "react";
import { ReactSVG } from "react-svg";
import SideBarMenuItem from "./SideBarMenuItem";

import homeIco from "../../assets/images/svg/home.svg";
import homeFIco from "../../assets/images/svg/homeF.svg";
import searchIco from "../../assets/images/svg/search.svg";
import searchFIco from "../../assets/images/svg/searchF.svg";
import writeIco from "../../assets/images/svg/write.svg";
import notifIco from "../../assets/images/svg/notif.svg";
import notifFIco from "../../assets/images/svg/notifF.svg";
import messageIco from "../../assets/images/svg/message.svg";
import messageFIco from "../../assets/images/svg/messageF.svg";

function TabBar() {
  return (
    <nav className="block sm:hidden sm:w-58p xl:w-275p sm:h-screen sm:sticky sm:top-0">
      <main className="flex flex-col sm:hidden w-full fixed bottom-0">
        <section className="self-end fixed bottom-4.5rem right-5">
          <div className="w-59p h-59p flex items-center justify-center bg-twitter-blue rounded-full">
            <ReactSVG src={writeIco} className="w-26.5p fill-current text-white" />
          </div>
        </section>
        <section className="flex items-center justify-around h-53p border-t-1 border-gray-light bg-white">
          <div className="flex items-center">
            <SideBarMenuItem linkTo="/" exact={true} text="Home" ico={homeIco} icoFilled={homeFIco} iconColor="text-gray-one" />
          </div>
          <div className="flex items-center">
            <SideBarMenuItem linkTo="/explore" text="Explore" ico={searchIco} icoFilled={searchFIco} iconColor="text-gray-one" />
          </div>
          <div className="flex items-center">
            <SideBarMenuItem linkTo="/notifications" text="Notifications" ico={notifIco} icoFilled={notifFIco} iconColor="text-gray-one" />
          </div>
          <div className="flex items-center">
            <SideBarMenuItem linkTo="/messages" text="Messages" ico={messageIco} icoFilled={messageFIco} iconColor="text-gray-one" />
          </div>
        </section>
      </main>
    </nav>
  );
}

export default TabBar;
