# 🌟 Contributing

プロジェクトへの貢献をご検討くださりありがとうございます 🙏  
開発・編集に参加される場合は、本ドキュメントをお読みください 👀

## 📩 Create an Issue

新機能の提案、不具合や誤字・脱字の報告は、このリポジトリの Issues に記載してください。

重複を避けるため、既に存在している Issue がないか確認をおねがいします。また、複数の問題がある場合は、それぞれ個別に追加してください。

## 🚀 Send a Pull Request

単純な誤字や小さな変更でも、プルリクエストは大歓迎です！  
[コントリビューター行動規範](./CODE_OF_CONDUCT.md) に反する内容を含むプルリクエストは受け入れておりません。ご注意ください。

### Commit Conventions

コミットメッセージの規約として [Conventionaal Commits](https://www.conventionalcommits.org/ja/v1.0.0/) および [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) を採用しています。  
許容されている型は以下のとおりです。

- **feat** - 新しい機能の追加。
- **fix** - 不具合の修正。（小さな変更は chore を使用）
- **docs** - ドキュメントの更新。
- **perf** - パフォーマンスの改善。
- **refactor** - リファクタリング。機能に変化のない修正。
- **style** - コードスタイルの変更。スペースやインデントの調整や Lint エラーの修正。
- **build** - ビルドに関連する変更。
- **ci** - CI に関連する変更。
- **test** - テストに関連する変更。
- **revert** - コミットの取り消し。
- **chore** - その他の変更。 typo の修正などの小さな変更。

### IDE Setup

このプロジェクトでは、 [Visual Studio Code](https://code.visualstudio.com/) の使用を推奨しています。  
また、以下のボタンから [StackBlitz Codeflow](https://stackblitz.com/codeflow) を使用して開発や修正をすることも可能です。

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/Hiratake/hiratake-web)

推奨する拡張機能は `.vscode/extensions.json` に記載しておりますので、適宜インストールするなどの対応をおねがいいたします。

### Package Manager

このプロジェクトでは、パッケージマネージャーに [pnpm](https://pnpm.io/ja/) を採用しています。  
`npm` や `yarn` を使用している場合は、ご変更ください。

[mise](https://mise.jdx.dev/) を使用している場合、`mise install` を実行してプロジェクトで使用しているバージョンの `Node.js` と `pnpm` をインストールします。

パッケージマネージャーの準備ができたら、以下の手順で環境構築を行ってください。

1. リポジトリを [Fork](https://docs.github.com/ja/github/getting-started-with-github/fork-a-repo) し、ローカルへ [clone](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository) します。
2. `pnpm install` を実行し、必要なパッケージをインストールします。
3. 開発を開始します。

### Linter and Formatter

このプロジェクトでは、 [ESLint](https://eslint.org/) および [textlint](https://textlint.github.io/) でコードのリンティング、 [Prettier](https://prettier.io/) でコードの整形を行っています。  
これらは、 Git のコミット時に自動的に実行され、適用されます。ただし、 `pnpm install` を実行している場合に限ります。

プロジェクトによっては `ESLint` でコードの整形まで行っているものもありますが、このプロジェクトではそのような設定にはしておりません。
