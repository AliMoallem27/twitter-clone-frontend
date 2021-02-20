import { useState } from "react";

function useSendTweet(tweetContent, userData, setTweetContent, setWritingStatus) {
  let [newTweets, setNewTweets] = useState([]);

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

    setNewTweets((preNewTweets) => [...preNewTweets, tweetBody]);

    setTweetContent("");
    setWritingStatus({ focused: false, writed: false });
  };

  return { newTweets, handleSendTweet };
}

export default useSendTweet;
