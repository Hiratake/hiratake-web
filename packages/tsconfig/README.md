# tsconfig

ワークスペースで使用する [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) カスタム設定コレクション。

## 🚀 Setup

TypeScript を使用するワークスペース内のパッケージに `tsconfig` をインストールします。

- TypeScript を使用するパッケージのディレクトリへ移動
- `pnpm add -D tsconfig --workspace` でカスタム設定をインストール
- TypeScript の設定ファイルを作成し `extends` に使用するカスタム設定を追加

ブラウザ上で動作するコード用の設定：

```json
{
  "extends": ["tsconfig/web.json"],
  "compilerOptions": {},
  "include": [],
  "exclude": []
}
```

Node.js 上で動作するコード用の設定：

```json
{
  "extends": ["tsconfig/node.json"],
  "compilerOptions": {},
  "include": [],
  "exclude": []
}
```
