// function to generate markdown for README
function generateMarkdown(data) {

  //Variable to contain the content of the readme file
  let theContent = "";

   /* Added if statement to print only the content user decides to add to their README file
   and ignore the ones they skipp on the prompt */

  if (data.projectTitle) {
    theContent += `# ${data.projectTitle}\n`;
  }

  //The table of contents function will only be displayed if any of the content is filled by user
  const tableOfContents = (data) => {

    // Table of contents variable will start empty
    let tocContent = "";

     /* Table of contents title variable will start  with its title by default
     It only will be empty case tocContent variable remains empty */
    let tocContentTitle = '## Table of Contents';

    //Case any data is true, starts the condition scope
    if (data) {

      //If no content is added
      if(tocContent === "") {

        //then table of contents does not display the title
        tocContentTitle = '';
      }
      
      /* Add data to tocContent if true
      and print the table of contents title. 
      The contents under the TBC will be displayed with anchors.*/

      tocContent += `
      ${tocContentTitle}\n
`;
      if (data.installation) {
        tocContent += `- [Installation](#installation)\n`;
      }
      if (data.usage) {
        tocContent += `- [Usage](#usage)\n`;
      }
      if (data.license) {
        tocContent += `- [License](#license)\n`;
      }
      if (data.contributing) {
        tocContent += `- [Contributing](#contributing)\n`;
      }
      if (data.tests) {
        tocContent += `- [Tests](#tests)\n`;
      }
      if (data.questions) {
        tocContent += `- [Questions](#questions)\n`;
      }

    }

    return tocContent;
  };

  if (data.description) {
    theContent += `## Description\n${data.description}\n`;
  }

  /* Add Table of Contents using the separate function at the right position
     just after the description section */
  theContent += tableOfContents(data);

  if (data.installation) {
    theContent += `## Installation\n${data.installation}\n`;
  }

  if (data.usage) {
    theContent += `## Usage\n${data.usage}\n`;
  }

  if (data.license) {
    theContent += `## License\n${data.license}\n`;
  }

  if (data.contributing) {
    theContent += `## Contributing\n${data.contributing}\n`;
  }

  if (data.tests) {
    theContent += `## Tests\n${data.contributing}\n`;
  }

  if (data.questions) {
    theContent += `## Questions\n${data.questions}\n`;
  }

  return theContent;
}

module.exports = generateMarkdown;
