import React, { createContext, useState, useEffect } from "react";

export let UserContext = createContext();
export let SetUserContext = createContext();

function UserProvider({ children }) {
  let [userData, setUserData] = useState({ title: "", username: "", avatar: "/images/unknown.png", following: 0, follower: 0 });

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((userInfo) => setUserData(userInfo));
  }, []);

  return (
    <UserContext.Provider value={userData}>
      <SetUserContext.Provider value={setUserData}>{children}</SetUserContext.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;
