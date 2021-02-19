import { useState } from "react";

// This hook handles the click on RT button or like button
function useTweetBtns(initialState) {
  const [state, setState] = useState(initialState);

  function TweetReactionRequest(event) {
    event.stopPropagation();

    let counterUpdateValue = (state.clicked && -1) || (!state.clicked && 1);

    setState((preState) => ({
      clicked: !preState.clicked,
      counter: parseInt(preState.counter) + parseInt(counterUpdateValue),
    }));
  }

  return [TweetReactionRequest, state];
}

export default useTweetBtns;
