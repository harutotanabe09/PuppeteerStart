# Name

SLP
( Serverless and Lamdba and Puppeteer and Github Actions ) 

# DEMO

実行するとこちらが出力される

```sh
"クラスメソッド発「やってみた」系技術メディア | Developers.IO"
```
 
# Features
 
SLPでサーバーレスでWebクローリング実行
 
# Requirement

* Node
* Yarn
* Serverless Framework
 
# Installation

package.jsonよりライブラリのダウンロード。
 
```bash
yarn install
```
 
# Usage
 
ローカル環境の実行
 
```bash
sls invoke -f app
```

本番環境の実行は、APIGatewayで確認可能
  
# Note
 
### Yarn init Package 

```sh
yarn init
```

### Yarn install 

```sh
// ローカル環境へインストール
yarn add puppeteer
// DEV環境へインストール
yarn add --dev prettier eslint eslint-plugin-prettier eslint-config-prettier babel-eslint serverless @serverless-chrome/lambda
```

### How to install 

```sh
node example.js
node hn.js
```

### MEMO1

- puppeteer と puppeteer coreは別物で、puppeteerはAllInOneのイメージ

### MEMO2

- eslintから自動整形はprettierが必要

```sh
eslint init
```

```sh
eslint . --quiet --fix
npx eslint . --quiet --fix
```

## EsLint でPrecommit前に行う

huskyとlint-stagedが必要
https://github.com/okonet/lint-staged#examples

pacakage.jsonにhuskyとlint-stagedを設定

## Serveless lamdba Puppetter

serverless-offline
- デプロイ前の確認。ドライランする前に実行
- yarn add --dev serverless-offline
- serverless.ymlのpluginで実行可能
-  npx sls offline で実行可能

https://github.com/serverless/examples/blob/master/aws-node-puppeteer/serverless.yml


```sh
curl -X GET \
  'http://localhost:3000?url={{URL}}' \

curl -X GET 'http://localhost:3000/dev?url=https://example.com'
```

## エラーとの戦い

- npx sls deployだとグローバル実行でなくローカル実行となり、なにかしたらのエラーになる

```sh
  Error: ENOENT: no such file or directory, open '.build/.serverless/nodemodules.zip'
```

- node_modules/puppeteer/.local-chromium/**を除外しないと容量エラーになる
  layers exclude serverlessがない
  https://www.wakuwakubank.com/posts/620-javascript-puppeteer/
  回避策：PUPPETEER_SKIP_CHROMIUM_DOWNLOAD or puppeteer-core

```sh
  An error occurred: NodemodulesLambdaLayer - Unzipped size must be smaller than 262144000 bytes
```

- "errorMessage": "Error: Cannot find module 'n- /var/runtime/index.js",

ライブラリをレイヤーに含めるには、ランタイムでサポートされているいずれかのフォルダにそれらを配置します。
Node.js – nodejs/node_modules、nodejs/node8/node_modules (NODE_PATH)

https://dev.classmethod.jp/articles/serverless-framework-node-modules-to-lambda-layers/
