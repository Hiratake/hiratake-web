#!/usr/bin/env node

import jiti from 'jiti'

const { runMainCommand } = jiti(import.meta.url)('../src/cli')

runMainCommand()
