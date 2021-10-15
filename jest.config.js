module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/tests/setup.ts'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    // '\\.(js|jsx)$': 'babel-jest'
    // "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // moduleNameMapper: {
  //   '^antd$': 'antd/dist/antd.js'
  // },
  // moduleNameMapper: {
  //   '\\.(css|scss)$': 'identity-obj-proxy',
  // },
}
