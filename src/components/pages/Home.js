import React, { useState } from "react";
import SideBar from "../layouts/SideBar";

import MainHeader from "../mainSection/MainHeader";
import TweetBox from "../mainSection/TweetBox";
import TweetCreator from "../mainSection/TweetCreator";
import Loading from "../mainSection/Loading";
import MainContainer from "../mainSection/MainContainer";
import useData from "../../hooks/useData";
import useWindowSize from "../../hooks/useWindowSize";
import { ReactSVG } from "react-svg";
import useUser from "../../hooks/useUser";
import useHambergurMenu from "../../hooks/useHambergurMenu";

import starsIco from "../../assets/images/svg/stars.svg";

function Home() {
  document.title = "Home / Twitter";
  let [newTweets, setNewTweets] = useState([]);

  let tweets = useData("tweets");

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
            <h2 className="text-xl font-semibold font-segoe-bold">Home</h2>
          </div>
          <div className="ml-auto">
            <div className="flex p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
              <ReactSVG src={starsIco} className="w-22.5p fill-current text-twitter-blue" />
            </div>
          </div>
        </MainHeader>

        <TweetCreator setNewTweets={setNewTweets} />
        <div className="hidden lg:block lg:h-2 lg:w-full lg:bg-gray-100 lg:border-1 lg:border-gray-50"></div>
        {tweets.length === 0 && <Loading />}
        {newTweets.length > 0 &&
          [...newTweets].reverse().map((tweet) => {
            return <TweetBox {...tweet} key={tweet.id} />;
          })}
        {[...tweets].reverse().map((tweet) => {
          return <TweetBox {...tweet} key={tweet.id} />;
        })}
      </MainContainer>
      {width >= 1024 && <SideBar />}
    </main>
  );
}

export default Home;
