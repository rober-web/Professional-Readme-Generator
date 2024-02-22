// function to generate markdown for README
function generateMarkdown(data) {
  // request for the licenses information
  const licenses = require('./licenses');

  // Variable to contain the content of the readme file
  let theContent = "";

  // Added if statement to print only the content user decides to add to their README file
  // and ignore the ones they skip on the prompt
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

  // The table of contents function will only be displayed if any of the content is filled by the user
  const tableOfContents = (data) => {
    let tocContent = "";

    if (data) {
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

  // Added the Table of Contents using the separate function at the right position
  // just after the description section
  const generatedTableOfContents = tableOfContents(data);

  if (generatedTableOfContents.trim() !== "") {
    theContent += `## Table of Contents\n${generatedTableOfContents}`;
  }

  if (data.installation) {
    theContent += `## Installation\n${data.installation}\n`;
  }

  if (data.usage) {
    theContent += `## Usage\n${data.usage}\n`;
  }

  // Conditional statement to prevent the license from being printed when the content is empty
  if (data.projectTitle && data.description && data.installation &&
    data.usage && data.contributing && data.tests && data.githubName) {
    theContent += `## License\n${data.license}\n`;
  }

  if (data.contributing) {
    theContent += `## Contributing\n${data.contributing}\n`;
  }

  if (data.tests) {
    theContent += `## Tests\n${data.tests}\n`;
  }
 // Questions section will only be generated case either githubName or emailAddress become true
  if (data.githubName || data.emailAddress) {
    theContent += `## Questions\n`;
  }

  if (data.githubName) {
    theContent += `My Github: [${data.githubName}](https://github.com/${data.githubName})\n`;
  }

  if (data.emailAddress) {
    theContent += `\nFor additional questions, you can reach me at: ${data.emailAddress}`;
  }

  return theContent;
}

module.exports = generateMarkdown;
