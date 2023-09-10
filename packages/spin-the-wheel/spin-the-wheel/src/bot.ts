import { Client } from 'discord.js';
import { processCommand } from './bot/commands';
require('dotenv').config({ path: '.env'});

export function main(event, context) {
  const name = event.name || 'stranger'
  const version = context.functionVersion
  const list = event.list || ''

  const client = new Client();

  client.on('ready', () => {
    console.log('Connected as ' + client.user?.tag + '.');
  });

  client.login(process.env.WHEEL_TOKEN);

  if(name == 'stranger') {
    console.log('Stranger requested a wheel. Ignoring.');
  }
  else if(list !== '') {
    console.log('List empty. Ignoring.');
  }
  else {
    processCommand('?pick ' + event.list);
  }

  return {
    body: `Hi ${name}, thanks for using spin-the-wheel-function ${version}!`
  }
}


