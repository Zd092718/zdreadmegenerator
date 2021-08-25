// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.toUpperCase();
  switch (license){
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    break;
    case 'MOZILLA':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    break;
    case 'APACHE':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    break;
    case 'BOOST':
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    break;
    case 'ECLIPSE':
      return 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
    break;
    case 'SIL':
      return 'https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg'
    break;
  }
}

// Renders
function renderLicenseLink(license) {
  license = license.toUpperCase();
  switch (license){
    case 'MIT':
        return 'https://opensource.org/licenses/MIT'
    break;
    case 'MOZILLA':
        return 'https://opensource.org/licenses/MPL-2.0'
    break;
    case 'APACHE':
        return 'https://opensource.org/licenses/Apache-2.0'
    break;
    case 'BOOST':
        return 'https://www.boost.org/LICENSE_1_0.txt'
    break;
    case 'ECLIPSE':
        return 'https://opensource.org/licenses/EPL-1.0'
    break;
    case 'SIL':
        return 'https://opensource.org/licenses/OFL-1.1'
    break;
  }
}

// renderse the license section
function renderLicenseSection(license) {
  if(license){
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  } else if(license === 'NO LICENSE') {
    return ' '
  }
}

//generates markdown 
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

  Email: <a href="mailto: ${data.emailAddress}">${data.emailAddress}</a>

  <br>

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
