'use strict'
const defaultExclude = require('@istanbuljs/schema/default-exclude')

const platformExclude = ['node_modules/*']

module.exports = {
  'per-file': true,
  lines: 25,
  statements: 25,
  functions: 10,
  branches: 35,
  'check-coverage': true,
  exclude: platformExclude.concat(defaultExclude),
  include: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  extension: ['.js', '.vue'],
  reporter: ['lcov', 'text'],
  cache: true,
  all: true
}
