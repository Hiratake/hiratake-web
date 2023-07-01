# stylelint-config

ワークスペースで使用する共通の [Stylelint](https://stylelint.io/) カスタム設定。

## 🚀 Setup

Stylelint を設定するワークスペース内のパッケージに `stylelint-config` をインストールします。

- Stylelint を設定するパッケージのディレクトリへ移動
- `pnpm add -D stylelint` で Stylelint をインストール
- `pnpm add -D stylelint-config --workspace` でカスタム設定をインストール
- Stylelint の設定ファイルを作成し `extends` に `stylelint-config` を追加

```js
// https://stylelint.io/user-guide/configure
/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config'],
}
```
