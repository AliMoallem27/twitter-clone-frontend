import React from "react";
import SideBarBox from "../sidebarSection/SideBarBox";
import WhoToFollowBox from "../sidebarSection/WhoToFollowBox";
import SearchInput from "../sidebarSection/SearchInput";
import useTweet from "../../hooks/useTweet";

function SideBar() {
  const whoToFollowUsers = useTweet("http://localhost:3000/whoToFollows");

  return (
    <aside className="h-screen sticky top-0 z-40 lg:ml-7 hidden lg:block lg:w-300p xl:w-350p">
      <main className="">
        <header className="h-16 bg-white py-2">
          <SearchInput />
        </header>
        <main>
          <SideBarBox endLink="#" endText="See more" title="Who to follow">
            {whoToFollowUsers.map((userData) => (
              <WhoToFollowBox title={userData.title} username={userData.username} avatar={userData.avatar} />
            ))}
          </SideBarBox>
        </main>
      </main>
    </aside>
  );
}

export default SideBar;
