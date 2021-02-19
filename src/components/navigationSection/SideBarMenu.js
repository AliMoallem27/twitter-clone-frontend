import React from "react";
import { ReactSVG } from "react-svg";
import AccountInfoBox from "./AccountInfoBox";
import useUser from "../../hooks/useUser";
import MenuItemCollection from "./MenuItemCollection";
import { Link } from "react-router-dom";

import twitterIco from "../../assets/images/svg/twitter.svg";
import writeIco from "../../assets/images/svg/write.svg";

function SideBarMenu() {
  let userData = useUser();

  return (
    <nav className="hidden sm:block sm:w-58p xl:w-275p sm:h-screen sm:sticky sm:top-0 mx-3">
      <main className="hidden h-full sm:flex sm:flex-col sm:items-center xl:items-start">
        <header className="sm:h-53p">
          <div className="p-2 mt-1 font-bold text-2xl text-twitter-blue hover:bg-twitter-blue hover:bg-opacity-10 rounded-full cursor-pointer">
            <Link to="/">
              <ReactSVG src={twitterIco} className="w-30p fill-current text-twitter-blue" />
            </Link>
          </div>
        </header>
        <section className="pt-2 flex flex-col sm:items-center xl:items-start">
          <MenuItemCollection />
        </section>
        <section className="flex justify-center xl:block">
          <div>
            <button className="hidden xl:block xl:w-230p xl:py-3 xl:mt-2 focus:outline-none xl:font-segoe-bold xl:text-white bg-twitter-blue hover:bg-twitter-blue-dark xl:rounded-full xl:border-0">Tweet</button>
          </div>
          <div className="xl:hidden flex justify-center items-center p-3 w-49p h-49p bg-twitter-blue rounded-full">
            <ReactSVG src={writeIco} className="w-22.5p fill-current text-white" />
          </div>
        </section>
        <AccountInfoBox title={userData.title} username={userData.username} avatar={userData.avatar} />
      </main>
    </nav>
  );
}

export default SideBarMenu;
