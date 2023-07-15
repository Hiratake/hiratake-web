import type { TextlintRuleModule } from '@textlint/types'

export interface Options {
  // If node's text includes allowed text, does not report.
  allows?: string[]
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
  const { Syntax, RuleError, report, getSource, locator } = context
  const allows = options.allows ?? []
  return {
    [Syntax.Str](node) {
      // "Str" node
      const text = getSource(node) // Get text
      if (allows.some((allow) => text.includes(allow))) {
        return
      }
      const matches = text.matchAll(/bugs/g)
      for (const match of matches) {
        const index = match.index ?? 0
        const matchRange = [index, index + match[0].length] as const
        const ruleError = new RuleError('Found bugs.', {
          padding: locator.range(matchRange),
        })
        report(node, ruleError)
      }
    },
  }
}

export default report
