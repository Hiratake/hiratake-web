# textlint-rule-front-matter

[![ci](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml/badge.svg)](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml)
![version](https://img.shields.io/npm/v/%40hiratake%2Ftextlint-rule-front-matter)
![license](https://img.shields.io/npm/l/%40hiratake%2Ftextlint-rule-front-matter)

YAML Front Matter のチェックをする [textlint](https://textlint.github.io/) ルール。

## 🚀 Setup

ルールを使用するプロジェクトに `@hiratake/textlint-rule-front-matter` をインストールします。

```sh
# npm
$ npm install -D @hiratake/textlint-rule-front-matter
# yarn
$ yarn add -D @hiratake/textlint-rule-front-matter
# pnpm
$ pnpm add -D @hiratake/textlint-rule-front-matter
```

インストール後、`.textlintrc` にルールを追加します。

```json
{
  "rules": {
    "@hiratake/textlint-rule-front-matter": {
      "keys": [
        // ここにチェックする Front Matter の項目の設定を追加
      ]
    }
  }
}
```

以下は `title` と `created` と `updated` が Front Matter に含まれるかどうかをチェックする場合の例です。

```json
{
  "rules": {
    "@hiratake/textlint-rule-front-matter": {
      "keys": [
        {
          "name": "title",
          "required": true
        },
        {
          "name": "created",
          "required": true
        },
        {
          "name": "updated",
          "required": true
        }
      ]
    }
  }
}
```

また、 `pattern` オプションに正規表現のパターンを指定することで各項目の入力内容を検証することが可能です。以下は `alphabet` と `number` の入力内容が、それぞれ英字であるかどうか・数字であるかどうかを検証する場合の例です。

```json
{
  "rules": {
    "@hiratake/textlint-rule-front-matter": {
      "keys": [
        {
          "name": "alphabet",
          "pattern": "^[a-zA-Z]+$"
        },
        {
          "name": "number",
          "pattern": "^[0-9]+$"
        },
      ]
    }
  }
}
```

デフォルトでは、Front Matter が存在していない場合はエラーを出力しません。  
textlint を実行する全てのファイルに Front Matter が存在していることを確認する場合は `enableFrontMatterExistenceCheck` オプションを有効にします。

```json
{
  "rules": {
    "@hiratake/textlint-rule-front-matter": {
      "keys": [],
      "enableFrontMatterExistenceCheck": true
    }
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
