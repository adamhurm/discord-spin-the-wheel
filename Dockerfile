FROM node:16-buster-slim
LABEL MAINTAINER="Adam Hurm" INFO="Discord Spin The Wheel"

COPY . /superpal
WORKDIR /superpal

RUN apt update && apt install python3 build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
RUN yarn install
RUN yarn setup

CMD ["node", "dist/bot.js"]
