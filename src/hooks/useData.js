import { useEffect, useState } from "react";
import db from "../db.json";

// This hook takes data from the server
function useData(url, params = false) {
  let [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetData = !params ? db[url] : db[url][params];
    setTweets(tweetData);
  }, [url, params]);
  return tweets;
}

export default useData;
