module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleFileExtensions: ['vue', 'json', 'ts', 'tsx', 'js', 'json'],
  // testRegex: '(/__tests__/\\w+\\-new\\.(test|spec))\\.tsx?$',
  testMatch: [
    "**/__tests__/**/*-new.(spec|test).[jt]s?(x)",
  ]
}
