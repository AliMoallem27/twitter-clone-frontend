import React from "react";
import MainHeader from "../mainSection/MainHeader";
import Loading from "../mainSection/Loading";
import MainContainer from "../mainSection/MainContainer";
import SideBar from "../layouts/SideBar";
import useUser from "../../hooks/useUser";
import useHambergurMenu from "../../hooks/useHambergurMenu";
import { ReactSVG } from "react-svg";
import useWindowSize from "../../hooks/useWindowSize";

import starsIco from "../../assets/images/svg/stars.svg";

function Explore() {
  document.title = "Explore / Twitter";
  let { width } = useWindowSize();

  let userData = useUser();

  let setMenuStatus = useHambergurMenu("SETTER");

  return (
    <main className="md:w-min w-full flex">
      <MainContainer>
        <MainHeader>
          <figure className="sm:hidden w-30p mr-5" onClick={() => setMenuStatus("OPEN")}>
            <img src={userData.avatar} alt="unknown" className="rounded-full" />
          </figure>
          <div>
            <h2 className="text-xl font-semibold font-segoe-bold">Explore</h2>
          </div>
          <div className="ml-auto">
            <div className="flex p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
              <ReactSVG src={starsIco} className="w-22.5p fill-current text-twitter-blue" />
            </div>
          </div>
        </MainHeader>
        <Loading />
      </MainContainer>
      {width >= 1024 && <SideBar />}
    </main>
  );
}

export default Explore;
