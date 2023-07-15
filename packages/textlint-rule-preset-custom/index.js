// https://textlint.github.io/docs/configuring.html
module.exports = {
  rules: {
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
