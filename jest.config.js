module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.stories.js'],
    coveragePathIgnorePatterns: ['node_modules'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 28,
            functions: 80,
            // functions: 19,
            lines: 30,
            statements: 29,
        },
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.(svg|scss)$': 'jest-transform-stub',
    },
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less|gif)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', 'src'],
};
