// tsconfig.js
const inquirer = require('inquirer');

let gitUser = () => {
    inquirer
        .prompt([{
            type: 'input',
            message: "Type GitHub username",
            name: "gitUsername"
        }])
        .then(answers => {

            let user = (answers.gitUsername)
        });
}

let currentUser = gitUser()


module.exports = gitUser;


//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });