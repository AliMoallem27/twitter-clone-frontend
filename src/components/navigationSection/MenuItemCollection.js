import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import useWindowSize from "../../hooks/useWindowSize";

import homeIco from "../../assets/images/svg/home.svg";
import homeFIco from "../../assets/images/svg/homeF.svg";
import exploreIco from "../../assets/images/svg/explore.svg";
import exploreFIco from "../../assets/images/svg/exploreF.svg";
import notifIco from "../../assets/images/svg/notif.svg";
import notifFIco from "../../assets/images/svg/notifF.svg";
import messageIco from "../../assets/images/svg/message.svg";
import messageFIco from "../../assets/images/svg/messageF.svg";
import bookmarkIco from "../../assets/images/svg/bookmark.svg";
import bookmarkFIco from "../../assets/images/svg/bookmarkF.svg";
import listIco from "../../assets/images/svg/list.svg";
import listFIco from "../../assets/images/svg/listF.svg";
import profileIco from "../../assets/images/svg/profile.svg";
import profileFIco from "../../assets/images/svg/profileF.svg";
import moreMenuIco from "../../assets/images/svg/moreMenu.svg";

function MenuItemCollection() {
  let { height } = useWindowSize();

  return (
    <>
      <SideBarMenuItem linkTo="/" exact={true} text="Home" ico={homeIco} icoFilled={homeFIco} />
      <SideBarMenuItem linkTo="/explore" text="Explore" ico={exploreIco} icoFilled={exploreFIco} />
      <SideBarMenuItem linkTo="/notifications" text="Notifications" ico={notifIco} icoFilled={notifFIco} />
      <SideBarMenuItem linkTo="/messages" text="Messages" ico={messageIco} icoFilled={messageFIco} />
      {height >= 615 && <SideBarMenuItem linkTo="/bookmarks" text="Bookmarks" ico={bookmarkIco} icoFilled={bookmarkFIco} />}
      {height >= 615 && <SideBarMenuItem linkTo="/lists" text="Lists" ico={listIco} icoFilled={listFIco} />}
      <SideBarMenuItem linkTo="/profile" text="Profile" ico={profileIco} icoFilled={profileFIco} />
      <SideBarMenuItem linkTo={false} text="More" ico={moreMenuIco} />
    </>
  );
}

export default MenuItemCollection;
