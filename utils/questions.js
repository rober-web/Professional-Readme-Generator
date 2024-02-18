// array of questions for user


function questions(){

  return ([
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
      type: "input",
      name: "license",
      message: "Define a license to your project:",
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
    {
      type: "input",
      name: "questions",
      message: "Questions:",
    }
  ])

} 
module.exports = questions;