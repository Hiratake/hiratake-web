import type { TextlintRuleModule } from '@textlint/types'

export interface Options {
  /** 太字の前にスペースを入れるかどうか */
  before?: boolean
  /** 太字の後にスペースを入れるかどうか */
  after?: boolean
}

const defaultOptions: Options = {
  before: false,
  after: false,
}

const reporter: TextlintRuleModule<Options> = (context, options = {}) => {
  const { Syntax, RuleError, report, getSource, locator, fixer } = context
  const allowBeforeSpace = options.before || defaultOptions.before
  const allowAfterSpace = options.after || defaultOptions.after

  return {
    [Syntax.Strong](node) {
      const nodeText = getSource(node)
      // 文字列の前後1文字を取得
      const textWithPadding = getSource(node, 1, 1).replace(/^\n*|\n*$/g, '')
      if (!textWithPadding) {
        return
      }
      // 太字の1つ前の文字を取得
      const beforeChar = textWithPadding[0]
      // 太字の1つ後の文字を取得
      const afterChar = textWithPadding[textWithPadding.length - 1]

      if (nodeText[0] !== beforeChar) {
        // 太字の前に文字が存在している場合のみ処理を実行
        if (allowBeforeSpace) {
          // 太字の前にスペースを入れる
          // リンクの中にある太字には適用しない
          if (beforeChar !== ' ' && beforeChar !== '[') {
            report(
              node,
              new RuleError('太字の前にスペースを入れてください。', {
                padding: locator.at(-1),
                fix: fixer.insertTextBeforeRange([0, 0], ' '),
              }),
            )
          }
        } else {
          // 太字の前にスペースを入れない
          if (beforeChar === ' ') {
            report(
              node,
              new RuleError('太字の前にスペースを入れません。', {
                padding: locator.at(-1),
                fix: fixer.replaceTextRange([-1, 0], ''),
              }),
            )
          }
        }
      }

      if (nodeText[nodeText.length - 1] !== afterChar) {
        // 太字の後に文字が存在している場合のみ処理を実行
        if (allowAfterSpace) {
          // 太字の後にスペースを入れる
          // リンクの中にある太字には適用しない
          if (afterChar !== ' ' && afterChar !== ']') {
            report(
              node,
              new RuleError('太字の後にスペースを入れてください。', {
                padding: locator.at(nodeText.length),
                fix: fixer.insertTextAfterRange([0, nodeText.length], ' '),
              }),
            )
          }
        } else {
          // 太字の後にスペースを入れない
          if (afterChar === ' ') {
            report(
              node,
              new RuleError('太字の後にスペースを入れません。', {
                padding: locator.at(nodeText.length + 1),
                fix: fixer.replaceTextRange(
                  [nodeText.length, nodeText.length + 1],
                  '',
                ),
              }),
            )
          }
        }
      }
    },
  }
}

export default {
  linter: reporter,
  fixer: reporter,
}
