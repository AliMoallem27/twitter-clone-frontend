module.exports = {
  purge: [
    "./src/components/layouts/Container.js",
    "./src/components/layouts/SideBar.js",
    "./src/components/mainSection/Loading.js",
    "./src/components/mainSection/MainContainer.js",

    "./src/components/mainSection/MainHeader.js",

    "./src/components/mainSection/TweetBox.js",
    "./src/components/mainSection/TweetBoxBtn.js",
    "./src/components/mainSection/TweetCreator.js",

    "./src/components/navigationSection/AccountInfoBox.js",

    "./src/components/navigationSection/HamburgerMenu.js",
    "./src/components/navigationSection/HamMenuItem.js",
    "./src/components/navigationSection/MenuItemCollection.js",
    "./src/components/navigationSection/SideBarMenu.js",
    "./src/components/navigationSection/SideBarMenuItem.js",
    "./src/components/navigationSection/TabBar.js",

    "./src/components/pages/Bookmarks.js",
    "./src/components/pages/Explore.js",
    "./src/components/pages/Home.js",
    "./src/components/pages/Lists.js",
    "./src/components/pages/Messages.js",
    "./src/components/pages/Notifications.js",
    "./src/components/pages/Profile.js",
    "./src/components/pages/TweetPage.js",

    "./src/components/sidebarSection/SearchInput.js",

    "./src/components/sidebarSection/SideBarBox.js",
    "./src/components/sidebarSection/WhoToFollowBox.js",

    "./src/components/sidebarSection/SearchInput.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "275p": "17.188rem",
        "600p": "37.5rem",
        "350p": "21.875rem",
        "950p": "59.375rem",
        "53p": "3.313rem",
        "30p": "1.875rem",
        "1280p": "75rem",
        "26.5p": "1.656rem",
        "26p": "1.625rem",
        "230p": "14.375rem",
        "39p": "2.438rem",
        "18.75p": "1.172rem",
        "255p": "15.938rem",
        "22.5p": "1.406rem",
        "49p": "3.063rem",
        "72p": "4.5rem",
        "59p": "3.688rem",
        "58p": "3.625rem",
        "1024p": "64rem",
        "300p": "18.75rem",
        "17.5p": "1.094rem",
        mainContentBox: "calc(100% - 3.063rem)",
      },
      height: {
        "53p": "3.313rem",
        "46p": "2.875rem",
        "60p": "3.75rem",
        "59p": "3.688rem",
        "26.5p": "1.656rem",
        "49p": "3.063rem",
        "17.5p": "1.094rem",
      },
      minHeight: {
        "60p": "3.75rem",
        "180p": "11.25rem",
        "118p": "7.375rem",
        "49p": "3.063rem",
      },
      colors: {
        "twitter-blue": "#1DA1F2",
        "twitter-blue-dark": "#1a91da",
        "twitter-red": "rgb(224, 36, 94)",
        "twitter-green": "rgb(23, 191, 99)",
        "gray-light": "#EBEEF0",
        "gray-menu": "#5b7083",
        "tweet-box-hover": "#F7F7F7",
        "sidebar-box": "#f7f9fa",
        "sidebar-box-hover": "#eff1f2",
        "search-box": "#eaedef",
        "text-gray-one": "rgb(91, 112, 131)",
        "black-opacity-40": "rgba(0, 0, 0, 0.4)",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        vazir: "Vazir",
        "segoe-bold": "Segoe UI Bold",
        "segoe-italic": "Segoe UI Italic",
        "segoe-regular": "Segoe UI Regular",
        "two-sided": "Segoe UI Regular, Vazir",
      },
      fontSize: {
        md: "0.950rem",
      },
      inset: {
        "4.5rem": "4.5rem",
      },
      translate: {
        "100vw-n": "-100vw",
      },
      zIndex: {
        49: "49",
      },
      animation: {
        boxShow: "showing .5s forwards",
      },
      keyframes: {
        showing: {
          "0%": { opacity: 0, display: "none" },
          "100%": { opacity: 1, display: "block" },
        },
      },
      flex: {
        sideContent: "0 0 3.063rem",
        mainContent: "auto 1 10rem",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};
