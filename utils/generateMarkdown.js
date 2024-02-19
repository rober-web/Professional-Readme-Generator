// function to generate markdown for README
function generateMarkdown(data) {
//request for the licenses information
const licenses = require('./licenses');


  //Variable to contain the content of the readme file
  let theContent = "";

   /* Added if statement to print only the content user decides to add to their README file
   and ignore the ones they skipp on the prompt */

  if (data.projectTitle) {
    theContent += `# ${data.projectTitle}\n`;
  }

    // License section with dynamic badge
    if (theContent !== "") {
      const selectedLicense = licenses.find(license => license.value === data.license);
      if (selectedLicense) {
        theContent += `${selectedLicense.badge}\n`;
      }
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
      if (data.license && theContent !== "") {
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
  //Conditional statement to prevent the license to be printed when the content is empty
  if ( (data.projectTitle !== "") && (data.description !== "") && (data.tableOfContents !== "") 
    && (data.installation !== "") && (data.usage !== "") && (data.contributing !== "") && (data.tests !== "") && (data.githubName !== "") ) { 
    theContent += `## License\n${data.license}\n`;
  }else{
      theContent += '';
  }

  if (data.contributing) {
    theContent += `## Contributing\n${data.contributing}\n`;
  }

  if (data.tests) {
    theContent += `## Tests\n${data.contributing}\n`;
  }

  if (data.githubName) {
    theContent += `## Questions\n My Github: [${data.githubName}](https://github.com/${data.githubName})` ;
  }

  return theContent;
}

module.exports = generateMarkdown;
