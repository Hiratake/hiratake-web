# Agent Instructions

このファイルは、Codex や Claude Code、GitHub Copilot などの AI ツールが、このリポジトリについて理解したり、作業を行う際に遵守すべき事項などをまとめたりしたものです。

新しい機能を実装したり、既存のコードを変更する際には、以下のコンテキストと規約を厳守して回答・コード生成を行なってください。

## Project Overview

[Hiratake Web](https://hiratake.dev/) は、[Nuxt](https://nuxt.com/) を用いて制作された個人ウェブサイトです。[Cloudflare Pages](https://www.cloudflare.com/ja-jp/developer-platform/products/pages/) にデプロイされています。

## Project Structure

```
app/
├── assets/
├── components/     # Vue コンポーネント（PascalCase.vue）
│   ├── Blog/       # ブログ（日記）の情報を表示するコンポーネント
│   ├── content/    # MDC 内で利用可能なコンポーネント
│   ├── Home/       # トップページで使用するコンポーネント
│   └── OgImage/    # OGP 画像を生成するためのコンポーネント
├── composables/    # コンポーザブル（use*.ts）
├── pages/          # アプリケーションのルートを作成するファイル
├── utils/          # ユーティリティ関数
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
server/             # サーバープログラム
```

## Commands

コマンドを実行するには Node.js および pnpm が動作する環境が必要です。各ツールの使用するバージョンは `mise.toml` に記載されています。

```
pnpm build            # アプリケーションをビルドする
pnpm dev              # 開発用のサーバーを起動する
pnpm generate         # 静的な HTML ファイルとして書き出す
pnpm preview          # プレビューを起動する
pnpm postinstall      # `nuxt prepare` を実行する
pnpm lint             # `pnpm lint:script` と `pnpm lint:text` を実行する
pnpm lint:fix         # `pnpm lint:script:fix` と `pnpm lint:text:fix` を実行する
pnpm lint:script      # ESLint でコードをチェックする
pnpm lint:script:fix  # ESLint でコードを修正する
pnpm lint:text        # textlint で Markdown ファイルをチェックする
pnpm lint:text:fix    # textlint で Markdown ファイルを修正する
pnpm typecheck        # TypeScript の型をチェックする
pnpm format           # Prettier でコードを整形する
```

## General Rules

- コメントや回答は、必ず日本語で行なってください。
- 変数名や関数名、TypeScript の型定義など、コード実装に関しては英語で記述してください。ただし、コード内にコメントを追加する場合には、あまりにも不自然になる場合を除き極力日本語で記載してください。
- 作業を行う際、不明点がある場合には必ずユーザーに対して「こういうことですか？」と確認をしてから作業を進めるようにしてください。
- ユーザーから渡された仕様に不足がある場合には、実装前にユーザーへ質問をしてください。
- コードを変更する際に、変更量が 200 行を超過する可能性が高い場合は、事前に「この指示では変更量が 200 行を超える可能性がありますが、実行しますか？」とユーザーに確認をとるようにしてください。
- コードを新しく追加・変更する際には、まず何をするのか計画を立てた上で、ユーザーに「このような計画で進めようと思います」と提案してください。このとき、ユーザーから計画の修正を求められた場合には、計画を修正し、ユーザーへ再提案してください。
- コードの追加・変更を行なった際は、作業内容に応じて作業の最後に `pnpm lint`、`pnpm typecheck`、`pnpm format` を実行してください。
- 全てのコミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/ja/) に従う必要があります。（例：`fix: ボタンのホバー状態を修正`、`feat: モーダルコンポーネントに fullscreen Prop を追加`）
- GitHub 上で提出されたプルリクエストについてレビューする際、コードの誤りやコンテンツの誤字脱字などを指摘する場合には、GitHub 上で 1 クリックで修正を適用できるように Markdown の `suggestion` ブロック（ ```suggestion ）を用いたインライン修正提案を出力してください。

## Instruction Priority

指示が矛盾する場合は、以下の優先順位に従ってください。

1. ユーザーの明示的な指示
2. このファイルの指示
3. `.github/docs/` 配下のタスク別ドキュメント
4. その他の慣例や推測

## References

タスクに基づいて、以下を読み込みます。全てのファイルを一度に読み込むのではなく、関連するものだけを読み込むようにしてください。

| File | Description |
|:--|:--|
| `.github/docs/blog-content.md` | `content/` ディレクトリ内に配置された、ウェブサイトのコンテンツを執筆する際に参照する |

## Agent Skills

- タスクに関連するスキルが利用可能な場合は、その指示に従ってください。
- スキルは `.github/skills/` 配下に格納されています。
