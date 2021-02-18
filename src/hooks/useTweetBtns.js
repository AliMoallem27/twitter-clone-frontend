import { useState } from "react";

function useTweetBtns(url, reqType, initialState) {
  const [state, setState] = useState(initialState);

  function TweetReactionRequest(event) {
    event.stopPropagation();
    let [newCounterProp, btnClickProp] = (reqType === "TOGGLE_LIKE" && ["likeNumber", "liked"]) || (reqType === "TOGGLE_RT" && ["retweetNumber", "retweeted"]);

    let counterUpdateValue = (state.clicked && -1) || (!state.clicked && 1);

    let newCounterValue = parseInt(state.counter) + parseInt(counterUpdateValue);

    let reqBody = {
      [btnClickProp]: !state.clicked,
      [newCounterProp]: newCounterValue,
    };

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    setState((preState) => ({
      clicked: !preState.clicked,
      counter: parseInt(preState.counter) + parseInt(counterUpdateValue),
    }));
  }

  return [TweetReactionRequest, state];
}

export default useTweetBtns;
