var samplePackage = {
    "name": "create-react-app-fullstack",
    "version": "0.1.0",
    "private": true,
    "devDependencies": {
        "debug": "^2.6.0",
        "react-scripts": "0.8.5",
        "yargs": "^6.6.0"
    },
    "dependencies": {
        "body-parser": "^1.16.0",
        "chalk": "^1.1.3",
        "classnames": "^2.2.5",
        "express": "^4.14.1",
        "morgan": "^1.7.0",
        "nodemon": "^1.11.0",
        "pg": "^6.1.2",
        "react": "^15.4.2",
        "react-dom": "^15.4.2",
        "react-router": "^3.0.2",
        "sequelize": "^3.30.1"
    },
    "scripts": {
        "start": "node scripts/starter.js",
        "fullstart": "node scripts/starter.js --fullstack",
        "build": "node scripts/build-fullstack.js",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
        "seed": "node db/seed.js"
    }
}

module.exports = samplePackage;
