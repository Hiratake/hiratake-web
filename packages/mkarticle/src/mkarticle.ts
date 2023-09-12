// Utils
import consola from 'consola'
import { stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export type CreateOptions = {
  /**
   * 記事の投稿日
   *
   * @example '20230911'
   */
  date?: string
  /**
   * ファイルを生成するディレクトリ
   *
   * @default 'content/blog'
   */
  directory?: string
}

export type CreateReturn = Promise<
  | undefined
  | {
      /** 生成したファイルのパス */
      path: string
      /** 生成したファイル名 */
      name: string
    }
>

export const create = async (options: CreateOptions): CreateReturn => {
  try {
    const { date = '', directory = 'content/blog' } = options
    const target = join(process.cwd(), directory)
    const file = join(target, `${date}.md`)

    if (date === '') {
      // 投稿日が空
      throw new Error('投稿日が指定されていません。')
    }
    if (!/^\d{8}$/.test(`${date}`)) {
      // 与えられた投稿日の形式が不正
      throw new Error(`${date} は正しい形式ではありません。`)
    }
    if (!(await stat(target)).isDirectory()) {
      // 対象がディレクトリではない
      throw new Error(`${target} はディレクトリではありません。`)
    }

    const created = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`

    // ファイルを生成
    await writeFile(
      file,
      [
        '---',
        'title: ',
        `created: ${created}`,
        `updated: ${created}`,
        '---',
        '',
        '',
        '',
      ].join('\n'),
      { encoding: 'utf8', flag: 'wx' },
    )
    consola.success(`${date}.md successfully created`)

    return { path: file, name: `${date}.md` }
  } catch (e) {
    if (e instanceof Error) {
      consola.error(e.message)
    }
    return
  }
}
