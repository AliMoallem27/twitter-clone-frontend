import { useEffect, useState } from "react";

// This hook takes data from the server
function useData(url) {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((tweetData) => setData(tweetData));
  }, [url]);
  return data;
}

export default useData;
