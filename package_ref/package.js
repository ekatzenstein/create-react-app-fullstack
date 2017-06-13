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
        "react-router-redux": "*",
        "redux": "*",
        "redux-logger": "*",
        "redux-thunk": "*",
        "sequelize": "*"
    },
    "scripts": {
        "start": "concurrently \"react-scripts start\" \"nodemon server\"",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
        "seed": "node db/seed.js"
    }
}

module.exports = samplePackage;
