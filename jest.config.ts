import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  verbose: true,
  modulePaths: ['./'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '.*\\.(spec|integration\\.spec)\\.ts$',
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleNameMapper: {
    '^root/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'process.env.NODE_ENV': 'test',
  },
};

export default config;
