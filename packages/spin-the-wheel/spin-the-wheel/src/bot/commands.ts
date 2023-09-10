import { pickCommand } from './commands/pick';

type Commands = {
  [key: string]: (args: string[], receivedMessage: string) => void;
};

const commands: Commands = {
  pick: pickCommand
};

const processCommand = (receivedMessage: string) => {
  const fullCommand = receivedMessage;
  const splitCommand = fullCommand.split(' ');
  const primaryCommand = splitCommand[0];
  const args = splitCommand.slice(1);

  console.log('Command received: ', primaryCommand, 'Arguments: ', args);

  const command = commands[primaryCommand];
  command?.(args, receivedMessage);
};

export { processCommand };
