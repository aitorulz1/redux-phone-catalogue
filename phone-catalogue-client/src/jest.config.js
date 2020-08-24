const {defaults} = require('jest-config');
module.exports = {
  //setupFiles: "<rootDir>/enzyme.config.js",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};