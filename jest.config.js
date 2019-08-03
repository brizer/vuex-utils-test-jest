module.exports = {
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    transformIgnorePatterns: ['/node_modules/'],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    collectCoverageFrom: ["**/src/store/**/**.{js,vue}", "!**/node_modules/**"],
    setupFiles: [
        '<rootDir>/tests/unit/__setups__/localstorage.js',
        '<rootDir>/tests/unit/__setups__/window.js'
    ]
};
