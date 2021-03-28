
// create function to generate markdown

function generateMarkdown(data) {
    return ` # ${data.Title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Table of Contents
1. [Description](##Description)
2. [Installation](##installation)
3. [Usage](##usage)
4. [Contributing](#contributing)
5. [Tests](##tests)
6. [License](##license)
7. [Questions](##questions)
    
## Description
${data.description}
    
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

## License
This application was created using: ${data.license} License

## Questions
Questions? Reach out to me! [${data.email}](mailto:${data.email})
    
Want to check out the Repo?[${data.username}](github.com/${data.username})
   
## Gif Clip
![ReadMe Demo](images/generator.gif)

## Link to Video
[Video Link]("https://www.youtube.com/embed/6dME4rkaoxg")
`;
}
// Object used to store method used in index.js file
module.exports = generateMarkdown;

