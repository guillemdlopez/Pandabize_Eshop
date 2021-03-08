module.exports = {
  setupFilesAfterEnv: ["<rootDir>app/javascript/setupTests.js"],
  roots: ["app/javascript/tests"],
  moduleDirectories: ["node_modules", "app/javascript/components"],
  testPathIgnorePatterns: ["<rootDir>/config/webpack/test.js"],
};
