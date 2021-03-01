const concurrently = require('concurrently');
const Randoma = require('randoma');
const { green, red } = require('chalk');

const random = new Randoma({ seed: Math.ceil(Math.random() * 10, 10) });
const { microfrontends } = require('../../../package.json');

const getConfig = (command) => (mfe) => ({
  command: `${command} --prefix microfrontends/${mfe}`,
  name: mfe,
  prefixColor: random.color(0.5).hex().toString(),
});

const concurrentProcesses = (command) => microfrontends.map(getConfig(command));

const getNPMCommand = (command) => {
  concurrently(concurrentProcesses(command)).then(
    ([
      {
        command: { name },
      },
    ]) => console.log(green(`${name}: ${command} successful`)),
    ([
      {
        command: { name },
      },
    ]) => console.log(red(`${name}: ${command} error`))
  );
};

module.exports = getNPMCommand;
