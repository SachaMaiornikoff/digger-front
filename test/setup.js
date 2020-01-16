const hooks = require('require-extension-hooks')

// Set up a virtual browser environment.
require('jsdom-global')()
require('browser-env')
global.expect = require('expect')
window.Date = Date // temporary bug fix, should be removed after vue-test-utils fixes #936

// Setup `.vue` files to be processed by `require-extension-hooks-vue`.
hooks('vue')
  .plugin('vue')
  .push()
// Setup `.vue` and `.js` files to be processed by `require-extension-hooks-babel`.
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel', { plugins: ['@babel/plugin-proposal-object-rest-spread'] })
  .push()
