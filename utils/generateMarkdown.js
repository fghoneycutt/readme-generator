// returns a license badge when a selected license is passed in
function renderLicenseBadge(license) {
  if (license === "GPLv3"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 3-Clause"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (license === "None"){
    return "![License: None](https://img.shields.io/badge/License-None-blue.svg)";
  }
}

// Create content for license section
function renderLicenseSection(license) {
  if (license === "None"){
    return "There is no license associated with this project.";
  } else {
    return "This application is covered under the " + license + " license.";
  }
}

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
Link to my GitHub profile - https://github.com/${data.github}

Email me with any additional questions - ${data.email}
`;
}
module.exports = generateMarkdown;