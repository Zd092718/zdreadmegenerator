// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.toUpperCase();
  switch (license){
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    break;
    case 'Mozilla':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    break;
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    break;
    case 'Boost':
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    break;
    case 'Eclipse':
      return 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
    break;
    case 'SIL':
      return 'https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg'
    break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license = license.toUpperCase();
  switch (license){
    case 'MIT':
        return 'https://opensource.org/licenses/MIT'
    break;
    case 'Mozilla':
        return 'https://opensource.org/licenses/MPL-2.0'
    break;
    case 'Apache':
        return 'https://opensource.org/licenses/Apache-2.0'
    break;
    case 'Boost':
        return 'https://www.boost.org/LICENSE_1_0.txt'
    break;
    case 'Eclipse':
        return 'https://opensource.org/licenses/EPL-1.0'
    break;
    case 'SIL':
        return 'https://opensource.org/licenses/OFL-1.1'
    break;
  }
  console.log(license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  } else {
    return ' '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  <details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
  </details>
  <br>

  ## About the Project
  ${data.description}

  ### Built With:
  * ${data.languages}

  ## Testing
  ${data.testInstructions}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributions}

  ## Contact
  Github Profile: https://github.com/${data.username}
  <br>
  Email: <a href="mailto: ${data.emailAddress}">${data.emailAddress}</a>
  <br>
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
