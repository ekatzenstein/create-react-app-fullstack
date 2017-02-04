var exec = require('child_process').execSync;
var yargs = require('yargs');

if(yargs.argv.fullstack){
  exec("nodemon scripts/start-fullstack.js --fullstack",{stdio:[0,1,2]});
}
else{
  exec("node scripts/start-fullstack",{stdio:[0,1,2]});
}
