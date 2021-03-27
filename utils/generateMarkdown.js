// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "Github": return "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"    
        case "PyPI" : return "[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)"
        case "Apache" : return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        case "GPLv3" : return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      } 
    };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
    case "Github" : return"[Github license](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"      
    case "PyPI" : return "[PyPI](https://pypi.python.org/pypi/ansicolortags/)"
    case "Apache" : return "[Apache](https://opensource.org/licenses/Apache-2.0)"
    case "GPLv3" : return "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return license 
};
   


// create function to generate markdown

function generateMarkdown(data) {
    return `
    
    # ${data.Title}

    ## Table of Contents
    *[Description](##Description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[License](#license)
    *[Questions](#questions)
    
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
    This project is licensed under the ${renderLicenseLink(license)} license.

    ## Questions
    Questions? Reach out to me! [${data.email}](mailto:${data.email})
    
    Want to check out the Repo?[${data.username}](github.com/${data.username})
    `;
    }
    // Object used to store method used in index.js file
    module.exports = generateMarkdown;

