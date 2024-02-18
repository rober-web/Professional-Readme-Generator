//Call the file system module
const fs = require("fs");
//Get the questions using the require method
const questions = require("./utils/questions");
//const path = require("path");

//Call for inquirer
const inquirer = require("inquirer");
//Require Markdown generator
const generateMarkdown = require("./utils/generateMarkdown");
//Deciding the file name and type extension will be easier
//if done up here
const fileType = {filename: 'README', type:'.md'};



// function to create and write README file
const writeToFile = (fileName, data) => {

    fs.writeFileSync(fileName, data);
    console.log(`${fileName} created successfully!`);

};

// function to initialize program
//Asynchronous initialization to first load the questions file and then generate the markdown file
async function init() {

    const answers = await inquirer.prompt(questions());

    // Generate markdown content using the collected data
    const markdownContent = generateMarkdown(answers);

    // Write to README file
    writeToFile(fileType.filename + fileType.type, markdownContent);

}

// function call to initialize program
init();
