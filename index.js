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
    //handling errors with try catch
  try {
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} created successfully!`);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};

// function to initialize program
//Asynchronous initialization to first load the questions file and then generate the markdown
async function init() {

    //handling errors with try catch
  try {
    // Get the data inserted by the user
    const answers = await inquirer.prompt(questions());

    // Generate markdown content using the collected data
    const markdownContent = generateMarkdown(answers);

    // Write to README file
    writeToFile(fileType.filename + fileType.type, markdownContent);
  } catch (error) {
    console.error('Error:', error);
  }
}

// function call to initialize program
init();
