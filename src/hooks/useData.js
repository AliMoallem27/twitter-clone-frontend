import { useEffect, useState } from "react";
import db from "../db.json";

// This hook takes data from the server
function useData(url, params = false) {
  let [data, setData] = useState([]);

  useEffect(() => {
    let tweetData;

    if (!params) tweetData = db[url];

    if (params) {
      tweetData = db[url].filter((oneitem) => {
        return (url === "tweets" && oneitem.id === parseInt(params - 1)) || (url === "mentions" && oneitem.tweetId === parseInt(params - 1));
      });
    }

    setData(tweetData);
  }, [url, params]);
  return data;
}

export default useData;
