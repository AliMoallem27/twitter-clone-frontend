import { useState, useEffect } from "react";

function useWindowSize() {
  let initialWindowSize = { width: window.innerWidth, height: window.innerHeight };
  let [windowSize, setWindowSize] = useState(initialWindowSize);

  let handleWindowResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
