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
    // 太字の前後の半角スペースをチェック
    // https://github.com/Hiratake/textlint-rule-space-around-bold
    '@hiratake/textlint-rule-space-around-bold': { after: true, before: true },
    // 括弧が対になっているかチェック
    // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
    '@textlint-rule/textlint-rule-no-unmatched-pair': true,
    // 単語などの前後の半角スペースをチェック
    // https://github.com/textlint-ja/textlint-rule-preset-ja-spacing
    'ja-space-between-half-and-full-width': { space: ['alphabets', 'numbers'] },
    'ja-space-around-code': { after: true, before: true },
    'ja-space-around-link': { after: true, before: true },
    // 半角英字と全角英字の混在をチェック
    // https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
  },
  filters: {
    // https://github.com/textlint/textlint-filter-rule-allowlist
    allowlist: { allow: ['/^:.+?\\{.+\\}$/m'] },
    // https://github.com/textlint/textlint-filter-rule-comments
    comments: true,
  },
}
