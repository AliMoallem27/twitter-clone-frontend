import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ReactSVG } from "react-svg";

import pictureIco from "../../assets/images/svg/picture.svg";
import gifIco from "../../assets/images/svg/gif.svg";
import statisticsIco from "../../assets/images/svg/statistics.svg";
import emojiIco from "../../assets/images/svg/emoji.svg";
import calendarIco from "../../assets/images/svg/calendar.svg";

import useUser from "../../hooks/useUser";

function TweetCreator({ setNewTweets }) {
  let [writingStatus, setWritingStatus] = useState({ focused: false, writed: false });
  let [tweetContent, setTweetContent] = useState("");

  let userData = useUser();

  let handleFocusTextArea = () =>
    setWritingStatus((previous) => ({
      ...previous,
      focused: true,
    }));

  let handleChangeTextArea = (e) => {
    setTweetContent(e.target.value);
    setWritingStatus((previous) => ({
      ...previous,
      writed: e.target.value.length === 0 ? false : true,
    }));
  };

  let handleSendTweet = () => {
    let tweetBody = {
      body: tweetContent,
      title: userData.title,
      username: userData.username,
      date: new Date().toDateString().slice(4),
      avatar: userData.avatar,
      verified: false,
      retweeted: false,
      liked: false,
      whoRetweeted: null,
      whoLiked: null,
      replyNumber: "0",
      retweetNumber: "0",
      likeNumber: "0",
    };

    let url = "http://localhost:3001/tweets";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweetBody),
    })
      .then((res) => res.json())
      .then((responeData) => setNewTweets((preNewTweets) => [...preNewTweets, responeData]));
    setTweetContent("");
    setWritingStatus({ focused: false, writed: false });
  };

  return (
    <section className="hidden lg:flex border-b-1 p-4 py-2 border-gray-light">
      <section className="flex w-full">
        <figure>
          <img src={userData.avatar} alt="unknown-person" className="w-49p rounded-full mr-5" />
        </figure>
        <main className="w-full flex flex-col justify-between">
          <div>
            <TextareaAutosize dir="auto" onFocus={handleFocusTextArea} onChange={handleChangeTextArea} value={tweetContent} className="text-xl pt-1 font-two-sided outline-none border-0 bg-transparent overflow-hidden leading-7 resize-none w-full min-h-49p" placeholder="What's happening?" />
          </div>
          <footer className="flex justify-between items-center w-full">
            <div className="flex">
              <div className="mr-1 rounded-full p-2 bg-transparent hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
                <ReactSVG src={pictureIco} className="w-22.5p fill-current text-twitter-blue" />
              </div>
              <div className="mr-1 rounded-full p-2 bg-transparent hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
                <ReactSVG src={gifIco} className="w-22.5p fill-current text-twitter-blue" />
              </div>
              <div className="mr-1 rounded-full p-2 bg-transparent hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
                <ReactSVG src={statisticsIco} className="w-22.5p fill-current text-twitter-blue" />
              </div>
              <div className="mr-1 rounded-full p-2 bg-transparent hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
                <ReactSVG src={emojiIco} className="w-22.5p fill-current text-twitter-blue" />
              </div>
              <div className="mr-1 rounded-full p-2 bg-transparent hover:bg-twitter-blue hover:bg-opacity-10 cursor-pointer">
                <ReactSVG src={calendarIco} className="w-22.5p fill-current text-twitter-blue" />
              </div>
            </div>
            <div>
              <button disabled={!writingStatus.writed} onClick={handleSendTweet} className={`focus:outline-none rounded-full bg-twitter-blue ${writingStatus.writed ? "bg-opacity-100" : "bg-opacity-50"} p-2 text-white font-segoe-bold px-4`}>
                Tweet
              </button>
            </div>
          </footer>
        </main>
      </section>
    </section>
  );
}

export default TweetCreator;
