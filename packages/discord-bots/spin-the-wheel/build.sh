#!/bin/bash

npm install yarn
apt update && apt install python3 build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
yarn install
yarn setup

node dist/bot.js