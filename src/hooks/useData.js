import { useEffect, useState } from "react";

// This hook takes data from the server
function useData(url) {
  let [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((tweetData) => setTweets(tweetData));
  }, [url]);
  return tweets;
}

export default useData;
