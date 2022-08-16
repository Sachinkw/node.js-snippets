// Core module
// File or folder (index.js in that folder)
// node_modules


// 4.13.6 -->  Major.Minor.Patch
// Patch - Bug fixes in current version
// Minor - adding new features w/o breaking existing api (new version would be 4.14.0 --> zero indicates no bug fixes yet, or unstable version)
// Major - adding new features that could potentially break existing apis

// "^4.13.6"  --> 4.x
// "~1.8.3"   --> 1.8.x


// To list all the dependencies :  npm list --depth=1


// To see the metadata about any package: npm view mongoose
// To see only the dependencies of a package: npm view mongoose dependencies


// To install a specific version: npm install underscore@1.4.0

// To list all the outdates packages with target versions: npm outdated

// To update the packages: npm update  --> this will not update to major update

// For major updates: npm i -g npm-check-updates
// npm-check-updates
// ncu -u
// npm i

// For installing only in dev environment (devDependencies): npm i jshint --save-dev

// To uninstall a package: npm un mongoose