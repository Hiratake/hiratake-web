// Utils
import { defineCommand, runMain } from 'citty'
import { create as createCommand } from './mkarticle'
// Variables
import { name, version } from '../package.json'

export const create = defineCommand({
  meta: {
    name: 'create',
    description: '新しいブログ記事の Markdown ファイルを生成します。',
  },
  args: {
    date: {
      type: 'positional',
      description: '記事の投稿日',
      required: false,
    },
    directory: {
      type: 'string',
      description: 'ファイルを生成するディレクトリ',
    },
  },
  run: async ({ args }) => {
    const result = await createCommand({
      date: args.date,
      directory: args.directory,
    })

    if (!result) {
      process.exit(1)
    }
  },
})

export const main = defineCommand({
  meta: {
    name,
    version,
    description: '新しいブログ記事の Markdown ファイルを生成します。',
  },
  subCommands: {
    create,
  },
})

export const runMainCommand = () => runMain(main)
