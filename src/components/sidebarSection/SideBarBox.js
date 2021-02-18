import React from "react";

function SideBarBox({ children, endLink, endText, title }) {
  return (
    <section className="w-full bg-sidebar-box rounded-2xl">
      <header className="py-3 px-4 border-b-1 border-gray-200 rounded-t-2xl hover:bg-sidebar-box-hover transition duration-200">
        <span className="font-segoe-bold font-semibold text-xl pb-4">{title}</span>
      </header>
      {children}
      <footer className="py-3 px-4 hover:bg-sidebar-box-hover cursor-pointer rounded-b-2xl transition duration-200">
        <a href={endLink} className="text-lg pb-4 text-twitter-blue">
          {endText}
        </a>
      </footer>
    </section>
  );
}

export default SideBarBox;
