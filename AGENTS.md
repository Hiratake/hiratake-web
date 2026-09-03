# AGENTS.md

このファイルは、Hiratake Web リポジトリで作業する AI コーディングエージェント向けのガイドラインです。

## Project Overview

[Hiratake Web](https://hiratake.dev/) は、[Nuxt](https://nuxt.com/) を用いて制作された個人ウェブサイトです。

## Project Structure

```
app/
├── assets/
├── components/     # Vue コンポーネント（PascalCase.vue）
│   ├── Blog/       # ブログ（日記）の情報を表示するコンポーネント
│   ├── content/    # MDC 内で利用可能なコンポーネント
│   ├── Home/       # トップページで使用するコンポーネント
│   └── OgImage/    # OG 画像を生成するためのコンポーネント
├── composables/
├── pages/          # アプリケーションのルートを作成するファイル
├── utils/
├── app.config.ts   # アプリケーションの設定
├── app.vue
└── error.vue
content/
├── about/          # 「運営者情報」のコンテンツ
├── blog/           # 「日記」のコンテンツ（YYYY/MM/DD.md）
├── contact/        # 「お問い合わせ」のコンテンツ
├── privacy/        # 「プライバシーポリシー」のコンテンツ
└── index.yaml      # トップページのコンテンツ
public/
server/
```

## Key Conventions

- コメントや返答は、必ず日本語で行ってください。
- GitHub 上で提出されたプルリクエストについてレビューする際、コードの誤りやコンテンツの誤字脱字などを指摘する場合には、GitHub 上で 1 クリックで修正を適用できるように Markdown の `suggestion` ブロック（ ```suggestion ）を用いたインライン修正提案を出力してください。

## References

タスクに基づいて、以下を読み込みます。全てのファイルを一度に読み込むのではなく、関連するものだけを読み込むようにしてください。

| File | Topics |
|:--|:--|
| [**.github/skills/content.md**](.github/skills/content.md) | `content/` ディレクトリ内に配置された、ウェブサイトのコンテンツを執筆する際の指示 |
