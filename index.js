//Packages needed for this application
const inquirer=require("inquirer");
const fs=require("fs");
const generateMarkdown=require("./utils/generateMarkdown");
const { validateHeaderName } = require("http");

// TODO: Create an array of questions for user input
//NEED: authorname, email, github username, project title, repo, proj description, 
//technologies used, installation info, usage, screenshot link, credits and license
const questions = ()=>{
    return inquirer.prompt([
        {
            type:"input",
            message:"Please provide you first and last name:",
            name:"AuthorName",
            validate:(name)=>{
                let check=name.match(/^[a-zA-Z]+[a-zA-Z]+/g);
                if (check) return true;
                return "That is a made up name. What is your REAL name?"
            }
        },
        {
            type: "input",
            message:"Please provide your email address:",
            name:"email",
            validate:(email)=>{
                let check=email.match(/\S+@\S+/g);
                if(check) return true;
                return "Invalid email address. Please try again"
            }
        },
        {
            type: "input",
            message:"Please provide your github username",
            name:"gitName",
            validate:(gitName)=>{
                if (gitName) return true
                return "Please enter a github username"
            }
        },
        {
            type: "input",
            message:"Please provide the title of your project",
            name:"projName",
            validate:(projName)=>{
                if (projName) return true;
                return "Please enter a title"
            }
        },
        {
            type: "input",
            message:"Please provide a brief descrption of the project",
            name:"description",
            validate:(description)=>{
                if (description) return true;
                return "Please enter a description"
            }
        },
        {
            type: "input",
            message:"Please provide a link to the project gitHub repository",
            name:"repo",
            validate:(repo)=>{
                if (repo) return true;
                return "Please enter a link";
            }
        },
        {
            type: "input",
            message:"Please provide relevant installation info",
            name:"installation",
            validate:(installation)=>{
                if (installation) return true;
                return "Please enter installation info"
            }
        },
        {
            type: "input",
            message:"Please provide usage instructions",
            name:"usage",
            validate:(usage)=>{
                if (usage) return true;
                return "Please enter usage instructions";
            }
        },
        {
            type: "input",
            message:"Please provide relevant credits",
            name:"credits",
            validate:(credits)=>{
                if (credits) return true;
                return "Please enter credits"
            }
        },
        {
            type: "input",
            message:"Please provide a link to a screenshot",
            name:"screenshotLink",
            validate:(screenshotLink)=>{
                if (screenshotLink) return true;
                return "Please enter the directory or URL of the screenshot"
            }
        },
        {
            type: "list",
            message:"Please select the license for this project",
            name:"license",
            choices:["Apache2.0","MIT","GNU AGPLv3","Mozilla Public 2.0","Boost Software 1.0" ],
        },
        {
            type:"checkbox",
            message:"Please select the technologies used to build this project",
            choices:["HTML","CSS","JavaScript","Boostrap","Node.js","React"],
            name:"technologies",
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
