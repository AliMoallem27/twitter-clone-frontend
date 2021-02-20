import React from "react";
import { ReactSVG } from "react-svg";
import ReactHtmlParser from "react-html-parser";
import { useHistory } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize.js";
import TweetBoxBtn from "./TweetBoxBtn";
import useTweetBtns from "../../hooks/useTweetBtns";

import replyIco from "../../assets/images/svg/reply.svg";
import RTIco from "../../assets/images/svg/RT.svg";
import likeIco from "../../assets/images/svg/like.svg";
import sendIco from "../../assets/images/svg/send.svg";
import analyticsIco from "../../assets/images/svg/analytics.svg";
import verifiedIco from "../../assets/images/svg/verified.svg";
import RTboldIco from "../../assets/images/svg/RTbold.svg";
import likeFIco from "../../assets/images/svg/likeF.svg";

function TweetBox({ id, avatar = "/images/unknown.png", title, username, date, body, retweeted, liked, verified, replyNumber, likeNumber, retweetNumber, whoRetweeted, whoLiked, isMention = false }) {
  let history = useHistory();
  let { width } = useWindowSize();

  let handleTweetClick = () => {
    history.push(`/tweet/${id}`);
    window.scrollTo(0, 0);
  };

  let url = isMention ? `http://localhost:3001/mentions/${id}` : `http://localhost:3001/tweets/${id}`;

  let [handleRetweetRequest, rtBtn] = useTweetBtns(url, "TOGGLE_RT", { clicked: retweeted, counter: retweetNumber });

  let [handleLikeRequest, likeBtn] = useTweetBtns(url, "TOGGLE_LIKE", { clicked: liked, counter: likeNumber });

  return (
    <article onClick={handleTweetClick} className="p-4 pb-1 pt-2 border-b-1 border-gray-light cursor-pointer hover:bg-tweet-box-hover transition duration-200">
      {(whoRetweeted || whoLiked) && (
        <section className="pl-8 mb-1">
          <div className="flex items-center text-gray-500">
            <ReactSVG src={whoRetweeted ? RTboldIco : likeFIco} className="w-18.75p fill-current mr-2" />
            <span className="text-sm font-segoe-bold">
              {whoRetweeted || whoLiked} {whoRetweeted ? "Retweeted" : "Liked"}
            </span>
          </div>
        </section>
      )}
      <section className="flex">
        <figure className="w-49p">
          <img src={avatar} alt="unknown-person" className="w-49p rounded-full" />
        </figure>
        <main className="w-mainContentBox overflow-hidden flex flex-col justify-between pl-2">
          <section className="mb-0 flex items-center">
            <span className="font-segoe-bold mr-1 whitespace-nowrap">{title}</span>
            {verified && (
              <span className="font-segoe-bold mr-1 fill-current text-twitter-blue">
                <ReactSVG src={verifiedIco} className="w-18.75p" />
              </span>
            )}
            <span className="text-text-gray-one mr-1 whitespace-nowrap">{`@${username}`}</span>
            <span className="text-text-gray-one mr-1 whitespace-nowrap pb-2">.</span>
            <span className="text-text-gray-one mr-1 whitespace-nowrap">{date}</span>
          </section>
          <article>
            <div dir="auto" className="leading-6 font-two-sided whitespace-pre-wrap">
              {ReactHtmlParser(body)}
            </div>
          </article>
          <footer className="pt-0.5 w-full">
            <div className="flex justify-between sm:grid sm:grid-cols-5">
              <TweetBoxBtn btnIco={replyIco} counter={replyNumber} />

              <TweetBoxBtn onClick={(event) => handleRetweetRequest(event)} btnIco={rtBtn.clicked ? RTboldIco : RTIco} counter={rtBtn.counter} secondColor={rtBtn.clicked ? "green" : "blue"} status={rtBtn.clicked} />

              <TweetBoxBtn onClick={(event) => handleLikeRequest(event)} btnIco={likeBtn.clicked ? likeFIco : likeIco} counter={likeBtn.counter} secondColor={likeBtn.clicked ? "red" : "blue"} status={likeBtn.clicked} />

              <TweetBoxBtn btnIco={sendIco} />

              {width >= 640 && <TweetBoxBtn btnIco={analyticsIco} />}
            </div>
          </footer>
        </main>
      </section>
    </article>
  );
}

export default TweetBox;
