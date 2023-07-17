# textlint-rule-preset-custom

ワークスペースで使用する共通の [textlint](https://textlint.github.io/) カスタムプリセット設定。

## 🚀 Setup

textlint を設定するワークスペース内のパッケージに `textlint-rule-preset-custom` をインストールします。

- textlint を設定するパッケージのディレクトリへ移動
- `pnpm add -D textlint` で textlint をインストール
- `pnpm add -D textlint-rule-preset-custom --workspace` でカスタムプリセット設定をインストール
- textlint の設定ファイルを作成し `rules` に `textlint-rule-preset-custom` を追加

```js
// https://textlint.github.io/docs/configuring.html
module.exports = {
  rules: {
    'preset-custom': true,
  },
}
```
