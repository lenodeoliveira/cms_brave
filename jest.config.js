
module.exports = {

    roots: ['<rootDir>/tests'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/main/**'
    ],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    coverageProvider: 'v8',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },

}
