import React from "react";

function Container({ children }) {
  return <div className="container mx-auto sm:flex justify-center">{children}</div>;
}

export default Container;
