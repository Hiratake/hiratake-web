// https://textlint.github.io/docs/configuring.html
module.exports = {
  rules: {
    // https://github.com/Hiratake/hiratake-web
    '@hiratake/textlint-rule-front-matter':
      require('@hiratake/textlint-rule-front-matter').default,
    '@hiratake/textlint-rule-space-around-bold':
      require('@hiratake/textlint-rule-space-around-bold').default,
    // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
    '@textlint-rule/textlint-rule-no-unmatched-pair': require('@textlint-rule/textlint-rule-no-unmatched-pair'),
    // https://github.com/textlint-ja/textlint-rule-preset-ja-spacing
    'ja-space-between-half-and-full-width': require('textlint-rule-ja-space-between-half-and-full-width'),
    'ja-space-around-code': require('textlint-rule-ja-space-around-code'),
    'ja-space-around-link': require('textlint-rule-ja-space-around-link'),
    // https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
    'no-mixed-zenkaku-and-hankaku-alphabet': require('textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet'),
  },
  rulesConfig: {
    // Front Matter の項目チェック
    '@hiratake/textlint-rule-front-matter': {
      keys: [
        { name: 'title', required: true },
        { name: 'created', required: true },
        { name: 'updated', required: true },
      ],
    },
    // 太字の前後の半角スペースをチェック
    '@hiratake/textlint-rule-space-around-bold': {
      after: true,
      before: true,
    },
    // 括弧が対になっているかチェック
    '@textlint-rule/textlint-rule-no-unmatched-pair': true,
    // 単語などの前後の半角スペースをチェック
    'ja-space-between-half-and-full-width': {
      space: ['alphabets', 'numbers'],
    },
    'ja-space-around-code': {
      after: true,
      before: true,
    },
    'ja-space-around-link': {
      after: true,
      before: true,
    },
    // 半角英字と全角英字の混在をチェック
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
  },
}
