// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     switch (license) {
//         case "Github": return "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"    
//         case "PyPI" : return "[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)"
//       } 
//     };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink (license) {
// switch (license) {
//     case "Github" : return"[Github](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"      
//     case "PyPI" : return "[PyPI](https://pypi.python.org/pypi/ansicolortags/)"
// }
// };

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     return license `# license
//     This project is licensed under the ${renderLicenseLink(license)} license.`;
//   }



// create function to generate markdown

function generateMarkdown(data) {
    return ` # ${data.Title}
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE) 

## Table of Contents
    * Description
    * Installation
    * Usage
    * Contributing
    * Tests
    * License
    * Questions
    
## ${data.description}
    
## Installation
If you wish to install, please run the following command in your terminal

 
${data.installCode}
    
## Usage Information
${data.usage}
    
## Contributing
${data.contribution}

## Tests
To test installation, run the following command in terminal:
  
${data.tests}



## Questions
Questions? Reach out to me! [${data.email}](mailto:${data.email})
    
Want to check out the Repo?[${data.username}](github.com/${data.username})
    `;
}
// Object used to store method used in index.js file
module.exports = generateMarkdown;

