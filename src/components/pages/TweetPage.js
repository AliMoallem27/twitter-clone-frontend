import React from "react";
import MainHeader from "../mainSection/MainHeader";
import MainContainer from "../mainSection/MainContainer";
import SideBar from "../layouts/SideBar";
import useTweet from "../../hooks/useTweet";
import TweetBox from "../mainSection/TweetBox";
import useWindowSize from "../../hooks/useWindowSize";
import { ReactSVG } from "react-svg";
import useUser from "../../hooks/useUser";
import useHambergurMenu from "../../hooks/useHambergurMenu";
import Loading from "../mainSection/Loading";

import backIco from "../../assets/images/svg/back.svg";

function TweetPage({ history, match }) {
  let tweetData = useTweet(`http://localhost:3000/tweets/${match.params.id}`);
  let mentions = useTweet(`http://localhost:3000/mentions?tweetId=${match.params.id}`);

  let setMenuStatus = useHambergurMenu("SETTER");
  let { width } = useWindowSize();
  let userData = useUser();

  document.title = `${tweetData.title} on Twitter: "${tweetData.body}" / Twitter`;

  return (
    <main className="md:w-min w-full flex">
      <MainContainer>
        <MainHeader>
          <figure className="sm:hidden w-30p mr-5" onClick={() => setMenuStatus("OPEN")}>
            <img src={userData.avatar} alt="unknown" className="rounded-full" />
          </figure>
          <div className="mr-5 p-0">
            <div onClick={() => history.goBack()} className="flex p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
              <ReactSVG src={backIco} className="w-22.5p fill-current text-twitter-blue" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold font-segoe-bold">Tweet</h2>
          </div>
        </MainHeader>
        {}
        {tweetData.length === 0 && <Loading />}
        {tweetData.length !== 0 && <TweetBox {...tweetData} />}
        {mentions.map((mentionData) => {
          return <TweetBox {...mentionData} key={mentionData.id} isMention={true} />;
        })}
      </MainContainer>
      {width >= 1024 && <SideBar />}
    </main>
  );
}

export default TweetPage;
