// array of questions for user

//request for the licenses information
const licenses = require('./licenses');

function questions(){


  return ([
    {
      type: "input",
      name: "githubName",
      message: "Enter your github username:",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "Enter your email address:",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "Enter the project title:",
    },
    {
      type: "input",
      name: "description",
      message: "Give a description to the project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe how to install your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe how to use your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Define a license to your project:",
      choices: licenses,//added choices as an array to select the license
    },
    {
      type: "input",
      name: "contributing",
      message: "Determine the contributors of the project:",
    },
    {
      type: "input",
      name: "tests",
      message: "Inform tests output:",
    },

  ])

} 
module.exports = questions;