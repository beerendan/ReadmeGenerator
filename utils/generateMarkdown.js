// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="Apache2.0"){
    return "[![License: Apache 2.0(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license==="MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license==="GNU AGPLv3"){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
  if (license==="Mozilla Public 2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license==="The Unlicense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  if (license==="None"){
    return ""
  }
}
function renderLicenseLink(license) {}
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //formatting screenshot links properly
   let screenshot = "";
  if (data.screenshotLink) {
    for (let i = 0; i < data.screenshotLink.split(",").length; i++) {
      screenshot += `![screenshot${i + 1}](${data.screenshotLink
        .split(",")[i]
        .trim()})`;
    }}
  renderLicenseBadge(data);
  //Readme Structure
  return `# ${data.projName}

  ## Description
${data.description}
This project uses: 
${data.technologies[0]}
${data.technologies[1]}
${data.technologies[2]}
${data.technologies[3]}
${data.technologies[4]}
${data.technologies[5]}
${data.technologies[6]}

## Installation
${data.installation}

## Usage
${data.usage}
Screenshot of live project: ${screenshot}
Link to deployed project: ${data.deployed}
Link to project gitHub repository: ${data.repo}

## Credits
${data.credits}

## License
This project is ${renderLicenseBadge(data.license)} licensed.
Copyright ${data.year} ${data.authorName}.
`;
}

module.exports = generateMarkdown;
