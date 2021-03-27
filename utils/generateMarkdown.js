// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// create function to generate markdown

function generateMarkdown(data) {
    return `
    
    # ${data.Title}
    ![npm](https://img.shields.io/npm/v/inquirer?style=plastic)
    
    ## Table of Contents
    * [Description](##Description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)
    
    ## Description
    ${data.description}
    
    ## Installation
    If you wish to install, please run the following command in your terminal
    \`\`\`
    ${data.installCode}
    \`\`\`
    ## Usage Information
    ${data.usage}
    
    ## Contributing
    ${data.contribution}

    ## Tests
    To test installation, run the following command in terminal:
    \`\`\`
    ${data.tests}
    \`\`\`

    ## License
    This project is licensed under the ${data.license} license.

    ## Questions
    Questions? Reach out to me! [${data.email}](mailto:${data.email})
    
    Want to check out the Repo?[${data.username}](github.com/${data.username})
    `;
    }
    // Object used to store method used in index.js file
    module.exports = generateMarkdown;

