# Contributing

Thanks for your contributions🙏  
Any contribution to this project is more than welcome🚀

開発に参加する場合は、本文書をお読みください。

## Reporting Issues

新機能の提案・不具合の報告は、このリポジトリの Issues に記載してください。

重複を避けるため、既に存在している Issue がないか確認をおねがいします。また、複数の問題がある場合は、それぞれ個別に追加してください。

## Pull Requests

単純な誤字や小さな変更でも、プルリクエストは大歓迎です！

[コントリビューター行動規範](./CODE_OF_CONDUCT.md) に反する内容を含むプルリクエストは受け入れておりません。

### Getting Started

開発を開始するには、以下の手順で準備を行ってください。

0. [Node.js](https://nodejs.org/) をインストールします。
1. リポジトリを [Fork](https://docs.github.com/ja/github/getting-started-with-github/fork-a-repo) し、ローカルへ [clone](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository) します。
2. `npm install` を実行し、必要なパッケージをインストールします。
3. 開発を開始します！

### Commit

コミットメッセージの規約として [Conventionaal Commits](https://www.conventionalcommits.org/) を採用しています。以下ルールに従って、コミットメッセージを記述してください。

- 1行目には概要を記述します。
  - 先頭に「型」「: （コロン + 半角スペース）」をいれ、その後ろに概要を記述します。
- 2行目には空行をいれます（本文を記述しない場合は不要）。
- 3行目以降には本文を記述します。省略できます。

1行目に記述する「型」には以下のものが許可されています。  
選択に困る場合は、とりあえず `chore` を使用します。複数当てはまる場合は、可能な限り複数のコミットに分割するようにしてください。

- **feat**: 新しい機能の追加。
- **fix**: 不具合の修正。（小さな変更は chore を使用）
- **docs**: ドキュメントの更新。
- **perf**: パフォーマンスの改善。
- **refactor**: リファクタリング。機能に変化のない修正。
- **style**: コードスタイルの変更。スペースやインデントの調整や Lint エラーの修正。
- **build**: ビルドに関連する変更。
- **ci**: CIに関連する変更。
- **test**: テストに関連する変更。
- **revert**: コミットの取り消し。
- **chore**: その他の変更。 typo の修正などの小さな変更。

詳しいルールについては [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) をご確認ください。
