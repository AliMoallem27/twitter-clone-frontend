# Twitter fronted clone

(One of) the most similar Twitter frontend clone. view demo: [demo](https://twitter-clone-frontend.netlify.app/)

NOTE: demo link uses static-mode of this project and some features such as sending and receiving data with the server do not work.

[![Netlify Status](https://api.netlify.com/api/v1/badges/aae9d9a7-fdb7-48ff-9f22-07b2c5103f43/deploy-status)](https://app.netlify.com/sites/twitter-clone-frontend/deploys)

[![Website twitter-clone-frontend.netlify.app](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://twitter-clone-frontend.netlify.app/)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![GitHub contributors](https://img.shields.io/github/contributors/AliMoallem27/twitter-clone-frontend.svg)](https://github.com/AliMoallem27/twitter-clone-frontend/graphs/contributors/)

![demo image](https://raw.githubusercontent.com/AliMoallem27/twitter-clone-frontend/main/public/images/demo-image.png)

- built using [React](https://reactjs.org/)

- bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- styled with [tailwindcss](https://tailwindcss.com/)

- Fully responsive just like Twitter site

## Features

- Writing tweet: You can write your tweets and they will be saved in the db.json file.

- Like or RT tweet: You can Like or RT tweets and mentions and they will be saved in the db.json file.

This project has two branch: master and static-mode.

The only difference between the master branch and the static-mode branch is in requesting data from the server.

## Customization

If you want to have your Twitter statically in your domain, you just need to edit the db.json file related to the static-mode branch

## Available Scripts

In the project directory in **static-mode branch**, you should run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To know about the server: [json-server](https://www.npmjs.com/package/json-server)

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
