# social-share

SNS シェアボタンの [Vue.js](https://ja.vuejs.org/) コンポーネントライブラリ。

## 🚀 Setup

コンポーネントを使用するワークスペース内のパッケージに `social-share` をインストールします。

- コンポーネントを使用するパッケージのディレクトリへ移動
- `pnpm add -D vue` で Vue.js をインストール
- `pnpm add -D social-share --workspace` でコンポーネントをインストール
- アプリケーション内でコンポーネントをインポート

```vue
<script lant="ts" setup>
import { SocialShare, SocialShareButton } from 'social-share'
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
