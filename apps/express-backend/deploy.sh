#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.1.0/bin

cd /home/ubuntu/monorepo
git pull origin master
yarn build
pm2 stop express
pm2 start npm --name "express" -- run "start:express"
