# TODO APP

_Your one stop place for todo notes!_

"TODO APP" is a website to manage todo notes made in React JS. This project is made in order to complete one of the recruitment stage of Majoo.

## Structure

Most of the important folders and files are inside the `src` folder. Inside, you will find 3 __files__:

1. `App.js`
2. `index.js`
3. `index.css`

`index.js` is the root file for the app. `app.js` is where the app is placed, and `styles.css` is the file for global styles.

Aside from the files, you will also find 4 __folders__:

1. `components`
2. `containers`
3. `pages`
4. `store`

All of the pages are stored in `pages`. Inside, there is an `index.js` file where all the pages are exported to make importing pages easier in other components. `components` contains the components used for this app. `containers` contains the layout components used for this app. `store` folder contains the store used for this app made with useContext and useReducer.

## Deployment

This project is deployed to github pages and can be accessed [here](https://alifsiregar.github.io/majoo-todo/).

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm start`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The page also has hot reload, which means that it will refresh if you make any edits.

If you want to build the app for production,  you can run this syntax in the project directory:

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

The build is then minified and the app is ready to be deployed!
