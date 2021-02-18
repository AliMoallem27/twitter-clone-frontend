import React from "react";

function MainHeader({ children }) {
  return (
    <header className="flex items-center px-3 border-b-1 border-gray-200 bg-white h-53p sticky top-0 z-40">
      <section className="flex items-center w-full">{children}</section>
    </header>
  );
}

export default MainHeader;
