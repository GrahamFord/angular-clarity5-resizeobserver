const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  transformIgnorePatterns: [
    'node_modules/(?!(@cds/core/icon|@cds/core|@clr/core/common|lit-html|lit-element|ramda)/)',
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
};
