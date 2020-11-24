## First Step 

Create package.json

```sh
yarn init
```

## Yarn install 

```sh
yarn add puppeteer
yarn add --dev prettier eslint eslint-plugin-prettier eslint-config-prettier babel-eslint serverless serverless-offline
```

## Guide

https://github.com/puppeteer/puppeteer

## Start

```sh
node example.js
```

Result Get Png

```sh
node hn.js
```

Result Get PDF

## Memo

puppeteer と puppeteer coreは別物っぽい

メモ：
https://kcf-developers.hatenablog.jp/entry/2018/10/11/114516

## Serverless Application Framework Start

```sh
sls create --template aws-nodejs --path ./src/models/lambda
mv src/models/lambda/serverless.yml ./
mv src/models/lambda/.gitignore ./

npx sls deploy 
npx sls config credentials --provider aws --key xxx --secret xxx
```

Serverlessは、除外設定必要。nodemodulesや.gitを無視する。

## EsLint を考える

eslintファイル作成。対話式

```sh
eslint init
```
eslintから自動整形はprettierが必要

```sh
eslint . --quiet --fix
npx eslint . --quiet --fix
```

https://qiita.com/myyasticatea/items/f523dab04a25f617c87d

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
yarn add --dev @serverless-chrome/lambda
```

## How to Start

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

