// function to generate markdown for README
function generateMarkdown(data) {
  let theContent = "";

  if (data.projectTitle) {
    theContent += `# ${data.projectTitle}\n`;
  }

  const tableOfContents = (data) => {
    let tocContent = "";
    let tocContentTitle = '## Table of Contents';;
    if (data) {
      if(tocContent === "") {
        tocContentTitle = '';
      }
      
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
      // Add more sections as needed
    }

    return tocContent;
  };

  if (data.description) {
    theContent += `## Description\n${data.description}\n`;
  }

  // Add Table of Contents using the separate function
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
