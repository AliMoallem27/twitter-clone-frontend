import { useContext } from "react";

import { UserContext } from ".././providers/UserProvider";

function useUser() {
  const userData = useContext(UserContext);
  return userData;
}

export default useUser;
