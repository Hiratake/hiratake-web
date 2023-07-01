# eslint-config-custom

ワークスペースで使用する共通の [ESLint](https://eslint.org/) カスタム設定。

## 🚀 Setup

ESLint を設定するワークスペース内のパッケージに `eslint-config-custom` をインストールします。

- ESLint を設定するパッケージのディレクトリへ移動
- `pnpm add -D eslint` で ESLint をインストール
- `pnpm add -D eslint-config-custom --workspace` でカスタム設定をインストール
- ESLint の設定ファイルを作成し `extends` に `custom` を追加

```js
// https://eslint.org/docs/latest/use/configure
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['custom'],
}
```
