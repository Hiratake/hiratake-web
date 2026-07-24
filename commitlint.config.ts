import type { UserConfig } from '@commitlint/types'

// https://commitlint.js.org/reference/configuration.html
const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

export default Configuration
