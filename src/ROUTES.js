import Bookmarks from "./components/pages/Bookmarks";
import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import Lists from "./components/pages/Lists";
import Messages from "./components/pages/Messages";
import Notifications from "./components/pages/Notifications";
import Profile from "./components/pages/Profile";
import TweetPage from "./components/pages/TweetPage";

const ROUTES = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/notifications",
    component: Notifications,
  },
  {
    path: "/messages",
    component: Messages,
  },
  {
    path: "/bookmarks",
    component: Bookmarks,
  },
  {
    path: "/lists",
    component: Lists,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/tweet/:id",
    component: TweetPage,
  },
  // {
  //   path: "/test/:id(RegExp)?",
  //   component: Test,
  // },
  // {
  //   path: "*",
  //   component: NotFound404,
  // },
];

export default ROUTES;
