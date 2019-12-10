// test/setup.js
const hooks = require('require-extension-hooks')

// Set up a virtual browser environment.
require('jsdom-global')()
global.expect = require('expect')
window.Date = Date // temporary bug fix, should be removed after vue-test-utils fixes #936

// Setup `.vue` files to be processed by `require-extension-hooks-vue`.
hooks('vue')
  .plugin('vue')
  .push()
// Setup `.vue` and `.js` files to be processed by `require-extension-hooks-babel`.
hooks(['vue', 'js'])
  .plugin('babel', { plugins: ['transform-object-rest-spread'] })
  .push()
