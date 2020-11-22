## Install


## First Step 

Create package.json

## Yarn install 

```sh
yarn add puppeteer
yarn add --dev prettier eslint eslint-plugin-prettier eslint-config-prettier babel-eslint serverless
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

yarnの初期化。

```sh
yarn init -y
```

puppeteer と puppeteer coreは別物っぽい
his
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

## EsLint を考える

eslintファイル作成。対話式

```sh
eslint init
```
eslintから自動整形はprettierが必要

```sh
eslint . --quiet --fix
```

https://qiita.com/mysticatea/items/f523dab04a25f617c87d

## EsLint でPrecommit前に行う

huskyとlint-stagedが必要
https://github.com/okonet/lint-staged#examples

pacakage.jsonにhuskyとlint-stagedを設定
