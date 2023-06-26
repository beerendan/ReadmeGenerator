//Packages needed for this application
const inquirer=require("inquirer");
const fs=require("fs");
const generateMarkdown=require("./utils/generateMarkdown");
const { validateHeaderName } = require("http");

// TODO: Create an array of questions for user input
//NEED: authorname, email, github username, project title, repo name, proj description, 
//installation info, usage, screenshot link, credits and license
const questions = ()=>{
    return inquirer.prompt([
        {
            type:"input",
            message:"FIrst and last name:",
            name:"AuthorName",
            validate:(name)=>{
                let check=name.match(/^[a-zA-Z]+[a-zA-Z]+/g);
                if (check) return true;
                return "That is a made up name. What is your REAL name?"
            },
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
