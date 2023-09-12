# mkarticle

新しいブログ記事の Markdown ファイルを生成する CLI ツール。

## 🚀 Setup

ブログ記事を生成するワークスペース内に `mkarticle` をインストールします。

- ブログ記事を生成するワークスペースのディレクトリへ移動
- `pnpm add -D mkarticle --workspace` でツールをインストール

インストール後、 `pnpm mkarticle create [OPTIONS] [DATE]` で実行します。

```sh
$ pnpm mkarticle create 20230101
```

### Arguments

- **DATE** - 記事の投稿日
  - `20230101` のように 8 桁の数字で指定

### Options

- **directory** - ファイル生成先のディレクトリ（任意）
  - `--directroy` オプションで指定
  - デフォルトでは `content/blog`

## 🏗 Build

以下のコマンドでビルドを実行します。ビルド後のファイルは `dist/` に出力されます。

```sh
$ pnpm build
```
