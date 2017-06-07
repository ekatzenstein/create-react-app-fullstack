var samplePackage = {
    "name": "create-react-app-fullstack",
    "version": "0.1.0",
    "private": true,
    "devDependencies": {
        "debug": "*",
        "react-scripts": "*",
        "yargs": "*"
    },
    "dependencies": {
        "body-parser": "*",
        "chalk": "*",
        "classnames": "*",
        "express": "*",
        "morgan": "*",
        "nodemon": "*",
        "pg": "*",
        "react": "*",
        "react-dom": "*",
        "react-router-dom": "*",
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
