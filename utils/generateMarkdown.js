function renderLicenseBadge(license) {
  if (!license) return ''; // If no license provided, return an empty string

  // the license names and URLS of their badges
  const licenseBadges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    apache: '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    gpl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)',
    agpl: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://opensource.org/licenses/AGPL-3.0)',
    lgpl: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://opensource.org/licenses/LGPL-3.0)',
    mpl: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    cddl: '[![License: CDDL-1.0](https://img.shields.io/badge/License-CDDL%201.0-brightgreen.svg)](https://opensource.org/licenses/CDDL-1.0)',
    epl: '[![License: EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-brightgreen.svg)](https://opensource.org/licenses/EPL-2.0)',
    unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://opensource.org/licenses/unlicense)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    zlib: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    bsd2: '[![License: BSD 2-Clause "Simplified"](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    bsd3: '[![License: BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    boost: '[![License: BSL-1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://opensource.org/licenses/BSL-1.0)',
    artistic: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    epl1: '[![License: EPL-1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    mspl: '[![License: Ms-PL](https://img.shields.io/badge/License-Ms--PL-blue.svg)](https://opensource.org/licenses/MS-PL)',
  };

  // Returns the badge for the given license, or an empty string if no such license exists
  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {

  // the license names and URLS of their descriptions
  const licenseLinks = {
    mit: 'https://opensource.org/licenses/MIT',
    apache: 'https://opensource.org/licenses/Apache-2.0',
    gpl: 'https://opensource.org/licenses/GPL-3.0',
    agpl: 'https://opensource.org/licenses/AGPL-3.0',
    lgpl: 'https://opensource.org/licenses/LGPL-3.0',
    mpl: 'https://opensource.org/licenses/MPL-2.0',
    cddl: 'https://opensource.org/licenses/CDDL-1.0',
    epl: 'https://opensource.org/licenses/EPL-2.0',
    unlicense: 'https://opensource.org/licenses/unlicense',
    isc: 'https://opensource.org/licenses/ISC',
    zlib: 'https://opensource.org/licenses/Zlib',
    bsd2: 'https://opensource.org/licenses/BSD-2-Clause',
    bsd3: 'https://opensource.org/licenses/BSD-3-Clause',
    boost: 'https://opensource.org/licenses/BSL-1.0',
    artistic: 'https://opensource.org/licenses/Artistic-2.0',
    epl1: 'https://opensource.org/licenses/EPL-1.0',
    mspl: 'https://opensource.org/licenses/MS-PL',
  };

  // Returns the URL of the given license, or an empty string if no such license exists
  return licenseLinks[license] || '';
}

function renderLicenseSection(license) {
  if (!license) {
    return 'No license used.';
  }

  // If a license is provided, state that the project is licensed under that license and link to its details
  return `This project is licensed under the [${license}](${renderLicenseLink(license)})`;
}

// This function generates the contents of the readme file based on the user's answers
function generateMarkdown(data) {
  return `# ${data.title} &nbsp;&nbsp;&nbsp;<span style="margin-left:20px;">${renderLicenseBadge(data.license)}</span>

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions
Should you have any inquiries or issues related to this repository, please feel free to open an issue or reach out to me directly at ${data.email}. Additionally, you're invited to explore more of my projects and contributions on GitHub. Simply visit [my GitHub profile](https://github.com/${data.github}/) to learn more.

## License 
${renderLicenseSection(data.license)} license. 
`;
}

module.exports = generateMarkdown;

// Starter Code provided for starts of functions:
// Credits: https://github.com/coding-boot-camp/potential-enigma/blob/main/Develop/package.json

// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string 
// Starter Code: function renderLicenseBadge(license){}

// TODO: Create a function that returns the license link. If there is no license, return an empty string 
// Starter Code: function renderLicenseLink(license){}

// TODO: Create a function that returns the license section of README. If there is no license, return an empty string 
// Starter Code: function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Starter Code: function generateMarkdown(data) { return `# ${data.title} `; }

// Starter Code: module.exports = generateMarkdown;