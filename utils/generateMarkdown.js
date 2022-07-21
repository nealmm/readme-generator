// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    case 'GNU General Public License v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`
   + `\n${renderLicenseBadge(data.license)}`
   + `\n\n## Description\n${data.description}`
   + `\n\n## Table of Contents`
     + `\n- [Installation](#installation)`
     + `\n- [Usage](#usage)`
     + `\n- [License](#license)`
     + `\n- [Contributing](#contributing)`
     + `\n- [Tests](#tests)`
     + `\n- [Questions](#questions)`
   + `\n\n## Installation\n${data.installation}`
   + `\n\n## Usage\n${data.usage}`
   + `\n\n## License\nThis project is covered under the ${data.license}`
   + `\n\n## Contributing\n${data.contributing}`
   + `\n\n## Tests\n${data.tests}`
   + `\n\n## Questions\nI can be reached on [GitHub](https://www.github.com/${data.username}/) or at ${data.email}.`
}

module.exports = generateMarkdown;
