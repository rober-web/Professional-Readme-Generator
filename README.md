# Professional README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
The project is a Professional README Generator implemented using Node.js. It allows users to interactively input their project information through the Inquirer library's command line. The responses inserted by the user will be used to generate a comprehensive README markdown file dynamically.<br><br>
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
## Installation
<b>1. Clone the Repository: </b><br><br>Open your terminal or command prompt and navigate to the directory where you want to clone the repository. Then, run the following command:<br><br>git clone https://github.com/rober-web/Professional-Readme-Generator.git <br><br><b>2. Navigate to Project Directory:</b><br><br>Change into the project directory by running:<br>cd Professional-Readme-Generator<br><br><b>3. Install Dependencies:</b><br><br>Ensure you have Node.js installed on your machine. You can download it from https://nodejs.org/. <br>Once Node.js is installed, install the project dependencies (Inquirer) by running:<br><br>npm install<br><br>In your package.json file, you'll need to ensure that the following dependencies are listed under the "dependencies" section:<br><br>"dependencies": {<br>"inquirer": "^8.4.0"<br>}<br><br>This dependency is for the Inquirer lib4rary,  to make questions to the user via command line.<br>You can add it manually by modifying the "package.json" file or install as the following:  <br><br>npm install --save inquirer@^8.4.0 <br><br><b>4. Run the Application:</b><br><br>Start the README generation process by running the following command:<br><br>node index.js<br><br><br>
## Usage
After running the application "node index.js":</p><p>Answer the prompts:</p><p>The application will show you some questions about your project. Answer each question. They cover essential sections such as project title, description, installation instructions, usage information, license selection, contributing guidelines, test details, and additional questions.</p><p>After all questions fullfilled, the application will generate a stylized README.md file with all information provided. In case any of the questions are skipped, they're not going to be shown in the final README file, however you can customize it manually once it is ready.<br><br>
## License
MIT
## Contributing
n/a<br><br>
## Tests
Running superb. All steps passed perfectly.<br><br>
## Questions
My Github: [rober-web](https://github.com/rober-web)

For additional questions, you can reach me at: rober@web.com