// Required modules
const fs = require('fs');
const path = require('path');

// Read the version from package.json
const { version } = require('./package.json');

// Paths to the environment files
const envFilePath = path.resolve(__dirname, 'src/environments/environment.ts');
const envProdFilePath = path.resolve(__dirname, 'src/environments/environment.prod.ts');

// Read the environment files
let envFileContent = fs.readFileSync(envFilePath, 'utf8');
let envProdFileContent = fs.readFileSync(envProdFilePath, 'utf8');

// Regular expression to find the version line
const versionRegex = /version:\s*['"`](.*?)['"`]/;

// Update the version in the environment files
envFileContent = envFileContent.replace(versionRegex, `version: '${version}'`);
envProdFileContent = envProdFileContent.replace(versionRegex, `version: '${version}'`);

// Save updated files
fs.writeFileSync(envFilePath, envFileContent, 'utf8');
fs.writeFileSync(envProdFilePath, envProdFileContent, 'utf8');

console.log(`Updated version to ${version}`);