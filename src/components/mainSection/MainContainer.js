import React from "react";

function MainContainer({ children }) {
  return (
    <main className="lg:flex w-full md:w-600p">
      <section className="sm:border-1 sm:border-gray-light h-full pb-48 w-full md:w-600p">{children}</section>
    </main>
  );
}

export default MainContainer;
