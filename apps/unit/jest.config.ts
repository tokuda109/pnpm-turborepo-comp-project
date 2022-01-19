import { resolve } from 'path';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^~(.*)$': `${resolve(__dirname, '../app/src')}/$1`,
  },
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts']
};

export default config;
