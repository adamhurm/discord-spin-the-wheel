import { Client } from 'discord.js';
import { processCommand } from './bot/commands';
require('dotenv').config({ path: '/home/discord-super-pal-of-the-week' });

const client = new Client();

client.on('ready', () => {
  console.log('Connected as ' + client.user?.tag);
});

client.on('message', (receivedMessage) => {
  if (receivedMessage.author === client.user) {
    return;
  }

  if (receivedMessage.content?.[0] === '!') {
    processCommand(receivedMessage);
  }
});

client.login(process.env.WHEEL_TOKEN);
