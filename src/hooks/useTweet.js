import { useEffect, useState } from "react";

function useTweet(url) {
  let [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((tweetData) => setTweets(tweetData));
  }, [url]);
  return tweets;
}

export default useTweet;
