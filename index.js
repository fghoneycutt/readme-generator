// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a description of your project.");
        return false;
      }
    },
  },
//   {
//     type: "input",
//     name: "installation",
//     message: "Enter any installation instructions:",
//     validate: (input) => {
//       if (input) {
//         return true;
//       } else {
//         console.log("Please enter installation instructions.");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "usage",
//     message: "Describe the usage of your project:",
//     validate: (input) => {
//       if (input) {
//         return true;
//       } else {
//         console.log("Please describe the usage of your project.");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "Enter your GitHub username:",
//     validate: (input) => {
//       if (input) {
//         return true;
//       } else {
//         console.log("Please enter your GitHub username.");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "contribution",
//     message: "Enter the contribution guidelines:",
//     validate: (input) => {
//       if (input) {
//         return true;
//       } else {
//         console.log("Please enter the contribution guidlines.");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "test",
//     message: "Enter test instructions for your project:",
//     validate: (input) => {
//       if (input) {
//         return true;
//       } else {
//         console.log("Please enter test instructions for your project.");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Enter your email address:",
//     validate: (input) => {
//       if (input) {
//         return true;
//       } else {
//         console.log("Please enter your email address.");
//         return false;
//       }
//     },
//   },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File Created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}
// Function call to initialize app
init()
.then(markdownData => {
    return generateMarkdown(markdownData);
})
.then(writeToFile)
.then(writeToFileResponse => {
    console.log(writeToFileResponse);
})
.catch(err => {
    console.log(err);
});

