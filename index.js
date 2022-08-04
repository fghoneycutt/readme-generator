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
        validate: (titleInput) => {
            if (titleInput){
                return true;
            } else {
                console.log("Please enter a title.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
        validate: (desInput) => {
            if (desInput){
                return true;
            } else {
                console.log("Please enter a description of your project.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log("data: " + data);
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
const init = markdownData => {
    return inquirer.prompt(questions);
}
// Function call to initialize app
init()
.then(markdownData => {
    return generateMarkdown(markdownData);
})
.then(writeToFile);

