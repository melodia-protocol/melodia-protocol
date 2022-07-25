#!/usr/bin/env sh

set -e

echo "pre-deploy"

dbPath=$1
if [ -z "$dbPath" ]; then
  echo "Usage: $0 <dbPath> <networkId>"
  exit 1
fi

networkId=$2
if [ -z "networkId" ]; then
  echo "Usage: $0 <dbPath> <networkId>"
  exit 1
fi

mkdir -p $dbPath
npx ganache --wallet.deterministic --wallet.totalAccounts 50 --database.dbPath "$dbPath" --chain.networkId "$networkId" &
ganache_pid=$!

npx truffle migrate --network predeploy
npx truffle execute-transaction-local

kill $ganache_pid
