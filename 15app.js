const fund = require('./notes');
const validator  = require('validator')

console.log(validator.isEmail("deee@gmail.com")+" this was checking the email to be valid or not ")
console.log(fund("HELLO "))
console.log(validator.isURL("www.googlecom")+" this was checking the validation of url")




const chalk = require('chalk');

const app = chalk;

console.log(app.green("SUCCESS"))

console.log(chalk.red.bgWhite.bold("HELLO "))

console.log(chalk.green("HELLO I am going to try  ")+
            chalk.red.bgWhite.underline("THIS ")+
            chalk.blue.bgWhite("THIS IS WORKING")
    )
    
console.log(chalk.inverse.green("HELLO I am going to try  ")+
chalk.red.bgWhite.underline("THIS ")+
chalk.blue.bgWhite("THIS IS WORKING")
)

console.log(process.argv[2])

