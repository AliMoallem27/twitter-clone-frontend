import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import { SetAppContext } from "../providers/AppProvider";

function useHambergurMenu(type) {
  let hamburgerMenuStatus = useContext(AppContext);
  let setHambergurMenuStatus = useContext(SetAppContext);

  if (type === "GETTER") return hamburgerMenuStatus;
  if (type === "SETTER") return setHambergurMenuStatus;
}

export default useHambergurMenu;
