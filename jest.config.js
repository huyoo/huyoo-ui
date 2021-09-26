module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/tests/setup.ts'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // moduleNameMapper: {
  //   '\\.(css|scss)$': 'identity-obj-proxy',
  // },
}
