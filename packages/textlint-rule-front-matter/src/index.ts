import type { TextlintRuleModule } from '@textlint/types'
import matter from 'gray-matter'

export interface Options {
  /** YAML Frontmatter の設定 */
  keys?: {
    /** キーの名前 */
    name: string
    /** 必須かどうか */
    required?: boolean
    /** 正規表現のパターン */
    pattern?: string
  }[]
  /** Front Matter が定義されていない場合にエラーとするか */
  enableFrontMatterExistenceCheck?: boolean
}

const defaultOptions: Options = {
  keys: [],
  enableFrontMatterExistenceCheck: false,
}

const reporter: TextlintRuleModule<Options> = (context, options = {}) => {
  const { Syntax, RuleError, report, getSource, locator } = context
  const keys = options.keys || defaultOptions.keys || []
  const enableFrontMatterExistenceCheck =
    options.enableFrontMatterExistenceCheck ||
    defaultOptions.enableFrontMatterExistenceCheck ||
    false

  return {
    [Syntax.Document](node) {
      const nodeText = getSource(node)

      if (!/^---\n[^]+\n---/.test(nodeText)) {
        // Front Matter がない場合
        if (enableFrontMatterExistenceCheck) {
          // 存在チェックが有効な場合エラーを出力
          report(
            node,
            new RuleError('Front Matter がありません。', {
              padding: locator.at(0),
            }),
          )
        }
        return
      }

      /** Front Matter のデータ */
      const data = matter(nodeText).data

      // 必須のキーが存在しているかチェック
      keys
        .filter((key) => key.required)
        .forEach((key) => {
          if (!(key.name in data)) {
            report(
              node,
              new RuleError(
                `Front Matter に「${key.name}」を指定してください。`,
                {
                  padding: locator.at(0),
                },
              ),
            )
          }
        })

      // 指定された正規表現のパターンと一致しているかチェック
      keys
        .filter((key) => key.pattern)
        .forEach((key) => {
          if (key.name in data) {
            const re = new RegExp(key?.pattern || '')
            if (!re.test(data[key.name])) {
              report(
                node,
                new RuleError(
                  `「${key.name}」が指定されたパターンと一致しません。`,
                  {
                    padding: locator.at(0),
                  },
                ),
              )
            }
          }
        })
    },
  }
}

export default reporter
