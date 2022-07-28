// .lintstagedrc.js

const path = require('path')

const buildEslintCommand = (filename) => {
  return `next lint --fix --file ${filename
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
}

module.exports = {
  '*.{js,ts}': [buildEslintCommand, 'prettier --write'],
  '*.{jsx,tsx}': [buildEslintCommand, 'stylelint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
}
