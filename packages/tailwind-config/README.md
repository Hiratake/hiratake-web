# tailwind-config

ワークスペースで使用する共通の [TailwindCSS](https://tailwindcss.com/) カスタムプリセット設定。

## 🚀 Setup

TailwindCSS を設定するワークスペース内のパッケージに `tailwind-config` をインストールします。

- TailwindCSS を使用するパッケージのディレクトリへ移動
- `pnpm add -D tailwindcss postcss autoprefixer` で TailwindCSS をインストール
- `pnpm add -D tailwind-config --workspace` でカスタムプリセット設定をインストール
- `pnpm tailwindcss init -p` で TailwindCSS の設定ファイルを作成
- カスタムプリセット設定を読み込み `presets` に追加

```js
// https://tailwindcss.com/docs/configuration
const sharedConfig = require('tailwind-config/tailwind.config')
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {},
  },
}
```
