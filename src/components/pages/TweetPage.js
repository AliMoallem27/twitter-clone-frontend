import React from "react";
import MainHeader from "../mainSection/MainHeader";
import MainContainer from "../mainSection/MainContainer";
import SideBar from "../layouts/SideBar";
import useData from "../../hooks/useData";
import TweetBox from "../mainSection/TweetBox";
import useWindowSize from "../../hooks/useWindowSize";
import { ReactSVG } from "react-svg";
import Loading from "../mainSection/Loading";

import backIco from "../../assets/images/svg/back.svg";

function TweetPage({ history, match }) {
  let tweetData = useData(`http://localhost:3001/tweets/${match.params.id}`);
  let mentions = useData(`http://localhost:3001/mentions?tweetId=${match.params.id}`);

  let { width } = useWindowSize();

  document.title = `${tweetData.title} on Twitter: "${tweetData.body}" / Twitter`;

  return (
    <main className="md:w-min w-full flex">
      <MainContainer>
        <MainHeader>
          <div className="mr-5 p-0">
            <div onClick={() => history.goBack()} className="flex p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
              <ReactSVG src={backIco} className="w-22.5p fill-current text-twitter-blue" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold font-segoe-bold">Tweet</h2>
          </div>
        </MainHeader>
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
