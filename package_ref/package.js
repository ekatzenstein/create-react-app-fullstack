var samplePackage = {
    "name": "create-react-app-fullstack",
    "version": "0.1.0",
    "private": true,
    "devDependencies": {
        "debug": "*",
        "react-scripts": "*",
        "yargs": "*",
        "nodemon": "*"
    },
    "dependencies": {
        "axios": "^0.16.2",
        "body-parser": "*",
        "chalk": "*",
        "classnames": "*",
        "concurrently": "*",
        "express": "*",
        "morgan": "*",
        "nodemon": "*",
        "pg": "*",
        "react": "*",
        "react-dom": "*",
        "react-redux": "*",
        "react-router-dom": "*",
        "redux": "*",
        "redux-logger": "*",
        "redux-thunk": "*",
        "sequelize": "*"
    },
    "scripts": {
        "start": "concurrently \"node scripts/start.js\" \"nodemon server\"",
        "build": "node scripts/build.js",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
        "seed": "node db/seed.js"
    }
}

module.exports = samplePackage;
