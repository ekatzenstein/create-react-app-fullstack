#!/usr/local/bin/node
const path  = require('path');
const fs    = require('fs');
const chalk = require('chalk');
const samplePackage = require('./package_ref/package.js');
const dependencies = Object.keys(samplePackage.dependencies);
const devDependencies = Object.keys(samplePackage.devDependencies);

var yargs = require("yargs").argv;
const exec = require('child_process').execSync

//eject app if not ejected
if(!fs.existsSync('./config')){
  exec('npm run eject',{stdio:[0,1,2]});
}

console.log();
console.log();
console.log();
console.log(chalk.white('initializing create-react-app-fullstack!'))
console.log();
console.log(chalk.grey('installing dependencies...'))
console.log();

exec(`npm i --save ${dependencies.join(' ')}`,{stdio:[0,1,2]});

console.log(chalk.grey('----------------------------------------'))
console.log(chalk.grey('fullstack dependencies installed'))
console.log(chalk.grey('----------------------------------------'))
console.log();
console.log(chalk.grey('installing devDependencies...'))
console.log();

exec(`npm i --save ${devDependencies.join(' ')}`,{stdio:[0,1,2]});

console.log(chalk.grey('----------------------------------------'))
console.log(chalk.grey('fullstack devDependencies installed'))
console.log(chalk.grey('----------------------------------------'))

if(fs.existsSync('./src')){
  exec('rm -r '+'./src');
}

exec('rsync -r '+path.join(__dirname, 'templates/')+' ./')

const packageString = fs.readFileSync('./package.json',{encoding:'utf8'});

let package = JSON.parse(packageString)

package.scripts.seed = samplePackage.scripts.seed;
package.scripts.start = samplePackage.scripts.start;
package.scripts.fullstart = samplePackage.scripts.fullstart;
package.scripts.build = samplePackage.scripts.build;

fs.writeFileSync('./package.json',JSON.stringify(package, null, 2))

console.log();
console.log(chalk.green('----------------------------------------'))
console.log(chalk.green('create-react-app-fullstack complete!'))
console.log(chalk.green('----------------------------------------'))
console.log();
console.log('GETTING STARTED')
console.log();
console.log(chalk.white("As you would in create-react-app, run ")+chalk.cyan("npm run start")+chalk.white(" to work with automatic front end development. This is connected to the server but does not update when back-end changes are made."))
console.log();
console.log();
console.log(chalk.white("To update with back-end changes, run ")+chalk.cyan("npm run fullstart")+chalk.white(" to make automatic updates to front-end and back-end edits. This method disables hot-reloading, so you'll want to refresh the browser to see updates."))
console.log();
console.log(chalk.white("To build a deployment ready version, run ")+chalk.cyan("npm run build")+chalk.white(" just as you would in create-react-app. You can preview the build result using ")+chalk.cyan("nodemon server."))
console.log();
console.log('Happy Hacking!')
console.log();
console.log();
