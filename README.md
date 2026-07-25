<h1>
  <a href="https://hiratake.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github-production-user-asset-6210df.s3.amazonaws.com/23224932/250346490-14357fb1-a0b5-4af7-85b0-1de7eab311bd.svg" sizes="(max-width:200px) 100vw, 200px" />
      <source media="(prefers-color-scheme: light)" srcset="https://github-production-user-asset-6210df.s3.amazonaws.com/23224932/250346471-47f036a3-9b03-49fe-bbea-7d6d8425142b.svg" sizes="(max-width:200px) 100vw, 200px" />
      <img alt="Hiratake Web" src="https://github-production-user-asset-6210df.s3.amazonaws.com/23224932/250346471-47f036a3-9b03-49fe-bbea-7d6d8425142b.svg" width="200" />
    </picture>
  </a>
</h1>

[![ci](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml/badge.svg)](https://github.com/Hiratake/hiratake-web/actions/workflows/ci.yaml)

[Nuxt](https://nuxt.com/) を使用してつくった、ひらたけのウェブサイト。

## 🚀 Setup

マシン上での動作には [Node.js](https://nodejs.org/ja) と [pnpm](https://pnpm.io/ja/) が動作する環境が必要です。  
以下コマンドを実行し、必要なパッケージをインストールします。

```bash
pnpm install
```

[mise](https://mise.jdx.dev/) を利用している場合は `mise install` で必要なツールをインストールすることができます。  
`mise.local.toml.example` ファイルを `mise.local.toml` としてコピーし、各環境変数を設定してください。

- `NUXT_OG_IMAGE_SECRET` - `pnpm dlx nuxt-og-image generate-secret` で生成されたキー

その他のツールを使用している場合は、`.env` ファイルを設置するなどして各環境変数を設定してください。

## 🛠 Develop

開発用サーバを起動します。

```bash
pnpm dev
```

## 🏗 Build

ウェブサイトをビルドします。

```bash
pnpm build
```

または、静的ファイルを生成します。

```bash
pnpm generate
```

ローカル環境でプレビューを確認するには、以下のコマンドを実行します。

```bash
pnpm preview
```

## 🌟 Contributing

プロジェクトへの貢献をご検討の方は、[CONTRIBUTING.md](.github/CONTRIBUTING.md) をご確認ください。

## 💌 Contact

- **Bluesky** - [@hiratake.dev](https://bsky.app/profile/hiratake.dev)
- **GitHub** - [@Hiratake](https://github.com/Hiratake)
