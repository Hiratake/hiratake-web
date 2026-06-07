// https://textlint.github.io/docs/configuring.html
module.exports = {
  rules: {
    // Front Matter の項目チェック
    // https://github.com/Hiratake/hiratake-web
    '@hiratake/textlint-rule-front-matter': {
      keys: [
        { name: 'title', required: true },
        { name: 'created', required: true },
        { name: 'updated', required: true },
      ],
    },
    // 括弧が対になっているかチェック
    // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
    '@textlint-rule/no-unmatched-pair': true,
    // 半角英字と全角英字の混在をチェック
    // https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    // スペースをチェック
    // https://github.com/textlint-ja/textlint-rule-preset-ja-spacing
    'preset-ja-spacing': {
      'ja-nakaguro-or-halfwidth-space-between-katakana': true,
      'ja-no-space-around-parentheses': false,
      'ja-no-space-between-full-width': false,
      'ja-space-between-half-and-full-width': {
        space: ['alphabets', 'numbers'],
      },
      'ja-space-after-exclamation': true,
      'ja-space-after-question': true,
      'ja-space-around-code': { before: true, after: true },
      'ja-space-around-emphasis': { before: true, after: true },
      'ja-space-around-link': { before: true, after: true },
      'ja-space-around-strong': { before: true, after: true },
    },
  },
  filters: {
    // https://github.com/textlint/textlint-filter-rule-allowlist
    allowlist: { allow: ['/^:.+?\\{.+\\}$/m'] },
    // https://github.com/textlint/textlint-filter-rule-comments
    comments: true,
  },
}
