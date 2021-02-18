import React from "react";
import TabBar from "../navigationSection/TabBar";
import SideBarMenu from "../navigationSection/SideBarMenu";
import HamburgerMenu from "../navigationSection/HamburgerMenu";
import useWindowSize from "../../hooks/useWindowSize";

function Navigation() {
  let { width } = useWindowSize();
  return (
    <>
      {width <= 640 && <HamburgerMenu />}
      {width >= 640 && <SideBarMenu />}
      {width <= 640 && <TabBar />}
    </>
  );
}

export default Navigation;
