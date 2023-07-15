# textlint-rule-space-around-bold

[![ci](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml/badge.svg)](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml)
![version](https://img.shields.io/npm/v/%40hiratake%2Ftextlint-rule-space-around-bold)
![license](https://img.shields.io/npm/l/%40hiratake%2Ftextlint-rule-space-around-bold)

太字のまわりをスペースで囲むかどうかを決める [textlint](https://textlint.github.io/) ルール。

## 🚀 Setup

ルールを使用するプロジェクトに `@hiratake/textlint-rule-space-around-bold` をインストールします。

```sh
# npm
$ npm install -D @hiratake/textlint-rule-space-around-bold
# yarn
$ yarn add -D @hiratake/textlint-rule-space-around-bold
# pnpm
$ pnpm add -D @hiratake/textlint-rule-space-around-bold
```

インストール後、`.textlintrc` にルールを追加します。

```json
{
  "rules": {
    "@hiratake/textlint-rule-space-around-bold": true
  }
}
```

## 🏗 Build

以下のコマンドでビルドを実行します。ビルド後のファイルは `lib/` に出力されます。

```sh
$ pnpm build
```

## 🧪 Test

以下のコマンドで [textlint-tester](https://github.com/textlint/textlint-tester) によるテストを実行します。

```sh
$ pnpm test
```

## 📃 License

MIT
