var exec = require('child_process').execSync;
var yargs = require('yargs');
var chalk = require('chalk');

if(yargs.argv.fullstack){
  exec("nodemon scripts/start-fullstack.js --fullstack",{stdio:[0,1,2]});
}
else if(yargs.argv.backend){
  console.log(chalk.cyan("Initiating back-end development environment. The first step is to rebuild front-end src components as static files. This will only happen once. To skip this step and use existing static builds, run 'nodemon server' instead."))
  console.log();
  console.log("Creating an optimized production build...")
  exec("node scripts/build-fullstack");
  console.log(chalk.cyan("Static files built! Initiating server..."))
  exec("nodemon server",{stdio:[0,1,2]})
}
else{
  exec("node scripts/start-fullstack",{stdio:[0,1,2]});
}
