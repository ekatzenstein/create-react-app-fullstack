# create-react-app-fullstack
<br/>

<div align="center">
	<img width="500" src="https://github.com/ekatzenstein/create-react-app-fullstack/blob/master/homepage.png?raw=true" alt="chalk">
</div>

## Installation
<br/>

```
npm i -g create-react-app
npm i -g create-react-app-fullstack
```

<br/>

## Getting Started
<br/>
This is designed for groud up full-stack development. Start by creating your database with PostgreSQL (you can do this after running 'fullstack' as well):

```
create db <my-app>
```  

After creating your database, initialize a create-react-app with the same name (the name match is default functionality, overriding this is straightforward):<br/>

```
create-react-app <my-app>
cd <my-app>
fullstack
```

After running *fullstack*, confirm that you want to eject and the remaining steps will update your app with Express and Sequelize.

If the app is already ejected, the first *eject* prompt is bypassed. The second prompt confirms that you want to run *fullstack* on your project. This command will add/overwrite/remove files in your *src*, *db*, *server*, and *scripts* folders. Since you're likely running this function at the beginning of a project, it shouldn't be an issue. But if you're in the middle of development, this prompt is a security net. After accepting the prompt, the project will install dependencies and template files.

#### remember to seed the database!

After the *fullstack* completes, run the command below to add dummy data to the database: `npm run seed`

<br/>

## Commands

### seed

Before getting started, seed the database with dummy data by running:

```
npm run seed
```

<br/>

### start

After the database is seeded, you should be all set. To enable front-end development with hot-reloading, use the same script as create-react-app:

```
npm run start
```


<br/>

### fullstart

To automate updates from back-end development, you can run the script below. The difference between this script and the one above: hot-reloading is disabled. Requires navigating to the localhost and refreshing the page:

```
npm run fullstart
```


<br/>

### build

To build deployment-ready, we use the same script as create-react-app:

```
npm run build
```


<br/>

### nodemon
After this, you can test your back-end code on the built static files:

```
nodemon server
```


<br/>

## References and Props
<br/>
Much of this work was built and taken from the resources below:
* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [create-react-app-add-redux](https://www.npmjs.com/package/create-react-app-add-redux)
* [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts)
* [Using create-react-app with React Router + Express.js](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
* [How to get "create-react-app" to work with your API](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
* [Bones](https://github.com/queerviolet/bones)

Currently, this repo adds *Express* and *Sequelize* to the mix for create-react-app. On the backlog are *Redux* and *SASS*, but some of the links above already have functionality for that.

Last, this project was built at a hackathon at [Full Stack Academy](https://www.fullstackacademy.com/). Development is preliminary.
