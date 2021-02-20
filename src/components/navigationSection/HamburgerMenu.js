import React from "react";
import { ReactSVG } from "react-svg";
import HamMenuItem from "./HamMenuItem";
import useUser from "../../hooks/useUser";
import useHambergurMenu from "../../hooks/useHambergurMenu";
import { Link } from "react-router-dom";

import closeIco from "../../assets/images/svg/close.svg";
import addIco from "../../assets/images/svg/add.svg";
import profileIco from "../../assets/images/svg/profile.svg";
import listIco from "../../assets/images/svg/list.svg";
import topicIco from "../../assets/images/svg/topic.svg";
import bookmarkIco from "../../assets/images/svg/bookmark.svg";
import momentIco from "../../assets/images/svg/moment.svg";
import adsIco from "../../assets/images/svg/ads.svg";
import analyticsIco from "../../assets/images/svg/analytics.svg";
import settingIco from "../../assets/images/svg/setting.svg";
import helpIco from "../../assets/images/svg/help.svg";
import dataSaverIco from "../../assets/images/svg/dataSaver.svg";
import displayIco from "../../assets/images/svg/display.svg";
import newslettersIco from "../../assets/images/svg/newsletters.svg";

function HamburgerMenu() {
  let userData = useUser();
  let menuStatus = useHambergurMenu("GETTER");
  let setMenuStatus = useHambergurMenu("SETTER");

  const handleCloseMenu = (event) => {
    event.stopPropagation();
    setMenuStatus("CLOSE");
  };

  return (
    <>
      <div onClick={handleCloseMenu} className={`block sm:hidden animate-boxShow ${menuStatus === "CLOSE" ? "hidden" : menuStatus === "OPEN" && "block"} bg-black-opacity-40 opacity-0 w-screen h-screen fixed top-0 left-0 z-49`}></div>
      <nav className={`block sm:hidden w-3/4 h-screen fixed top-0 left-0 z-50 transform ${menuStatus === "OPEN" ? "translate-x-0" : menuStatus === "CLOSE" && "translate-x-100vw-n"} transition-transform duration-300 ease-in-out`}>
        <main className="bg-white w-full h-screen overflow-y-auto border-r-2 border-gray-light pb-32">
          <header className="flex justify-between items-center sticky top-0 bg-white z-50 px-4 h-53p border-b-1 border-gray-200">
            <span className="text-xl font-semibold font-segoe-bold">Account info</span>
            <div className="p-2" onClick={handleCloseMenu}>
              <ReactSVG src={closeIco} className="w-22.5p fill-current text-twitter-blue" />
            </div>
          </header>
          <section className="px-4 py-3">
            <div className="flex items-center justify-between">
              <figure>
                <Link to="/profile" onClick={handleCloseMenu}>
                  <img src={userData.avatar} className="w-39p rounded-full" alt="unknown" />
                </Link>
              </figure>
              <div className="border-1 border-twitter-blue rounded-full p-1 self-start">
                <ReactSVG src={addIco} className="w-22.5p fill-current text-twitter-blue" />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-segoe-bold text-md">{userData.title}</span>
              <span className="relative bottom-1 text-md text-text-gray-one">@{userData.username}</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className="mr-6">
                <span className="font-segoe-bold text-md">{userData.following}</span>
                <span className="text-text-gray-one ml-1">Following</span>
              </span>
              <span className="">
                <span className="font-segoe-bold text-md">{userData.follower}</span>
                <span className="text-text-gray-one ml-1">Follower</span>
              </span>
            </div>
          </section>
          <section className="px-4 mt-2 border-b-1 border-gray-light">
            <HamMenuItem name="Profile" icon={profileIco} linkTo="/profile" />
            <HamMenuItem name="Lists" icon={listIco} linkTo="/lists" />
            <HamMenuItem name="Topics" icon={topicIco} linkTo="/topics" />
            <HamMenuItem name="Bookmarks" icon={bookmarkIco} linkTo="/bookmarks" />
            <HamMenuItem name="Moments" icon={momentIco} linkTo="/moments" />
            <HamMenuItem name="Newsletters" icon={newslettersIco} linkTo="#" />
          </section>
          <section className="px-4 mt-2 border-b-1 border-gray-light">
            <HamMenuItem name="Twitter Ads" icon={adsIco} linkTo="#" />
            <HamMenuItem name="Analytics" icon={analyticsIco} linkTo="#" />
          </section>
          <section className="px-4 mt-2 border-b-1 border-gray-light">
            <HamMenuItem name="Settings and privacy" icon={settingIco} linkTo="#" />
            <HamMenuItem name="Help Center" icon={helpIco} linkTo="#" />
          </section>
          <section className="px-4 mt-2 border-b-1 border-gray-light">
            <HamMenuItem name="Date saver" icon={dataSaverIco} linkTo="#" />
            <HamMenuItem name="Display" icon={displayIco} linkTo="#" />
          </section>
          <section className="px-4 mt-4 mb-14">
            <span>Log out</span>
          </section>
        </main>
      </nav>
    </>
  );
}

export default HamburgerMenu;
