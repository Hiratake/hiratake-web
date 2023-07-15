# social-share

[![ci](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml/badge.svg)](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml)
![version](https://img.shields.io/npm/v/%40hiratake%2Fsocial-share)
![license](https://img.shields.io/npm/l/%40hiratake%2Fsocial-share)

SNS シェアボタンの [Vue.js](https://ja.vuejs.org/) コンポーネントライブラリ。スタイルを持たず、機能だけのコンポーネントです。

## 🚀 Setup

コンポーネントを使用するプロジェクトに `@hiratake/social-share` をインストールします。

```sh
# npm
$ npm install -D @hiratake/social-share
# yarn
$ yarn add -D @hiratake/social-share
# pnpm
$ pnpm add -D @hiratake/social-share
```

インストール後、コンポーネントをインポートして使用します。

```vue
<script lant="ts" setup>
import { SocialShare, SocialShareButton } from '@hiratake/social-share'
</script>

<template>
  <div>
    <SocialShare
      service="twitter"
      url="https://example.com"
      text="Blog Post Title"
    >
      <SocialShareButton>Share</SocialShareButton>
    </SocialShare>
  </div>
</template>
```

## 🏗 Build

以下のコマンドでビルドを実行します。ビルド後のファイルは `dist/` に出力されます。

```sh
$ pnpm build
```

## 📃 License

MIT
