const config = {
  verbose: true,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/(?:.+?)",
    "<rootDir>/dist/(?:.+?)",
    "<rootDir>/coverage/(?:.+?)",
    "<rootDir>/config/(?:.+?)",
    "<rootDir>/e2e/(?:.+?)",
    "<rootDir>/src/environments/(?:.+?)",
    "<rootDir>/src/polyfills.ts",
    "<rootDir>/src/app/modules/private/(?:.+?)",
    "<rootDir>/src/app/shared/(?:.+?)",
    "<rootDir>/src/assets/(?:.+?)",
    "<rootDir>/src/main.server.ts",
    "<rootDir>/src/main.ts",
    "<rootDir>/src/polyfills.ts",
    "<rootDir>/src/sw.js",
  ]
};

module.exports = config;