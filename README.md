# Anomaly Finder Frontend
Frontend application for Anomaly Finder game. Provides querying and displaying sequences of images with targets as well as displaying rules and scores.

## Related project repositories
[Anomaly Finder Backend](https://github.com/RyazanGrove/anomaly-finder-backend)

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Configuration](#configuration)
- [Testing](#testing)

## Requirements
* Angular CLI 18.2.1+
* Node.js 20.17.0+
* Project uses npm 10.8.2+

## Installation
Project uses Gradle to build the application.
1. Clone the repository:
```bash
git clone https://github.com/RyazanGrove/anomaly-finder-frontend.git
```
2. Navigate to the project directory:
```bash
cd anomaly-finder-frontend
```
3. Install Angular CLI (if not installed):
```bash
npm install -g @angular/cli
```
4. Use npm to install the project dependencies:
```bash
npm install
```
5. Start the Development Server:
```bash
ng serve
```

## Usage
To start the application, use the following command. It will create a new tab in browser.
```bash
ng serve --open
```
Or you can run `ng serve` and navigate to `http://localhost:4200/`.

## Documentation


### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Configuration
Configuration is done using environment files located in `src/environments`.
Script file `set-version.js` updates version of the application from `package.json` file every time when `npm i` or `npm install` is run.

## Testing
Tests are located in `*.spec.ts` files for a related component. Tests use Jest as testing library. To run tests execute command:
```bash
ng test
```
or
```bash
npm run test
```

