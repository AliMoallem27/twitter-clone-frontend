import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import { SetAppContext } from "../providers/AppProvider";

// This hook opens and closes the hamburger menu
function useHambergurMenu(type) {
  let hamburgerMenuStatus = useContext(AppContext);
  let setHambergurMenuStatus = useContext(SetAppContext);

  if (type === "GETTER") return hamburgerMenuStatus;
  if (type === "SETTER") return setHambergurMenuStatus;
}

export default useHambergurMenu;
