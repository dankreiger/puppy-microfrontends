const concurrently = require('concurrently');
const Randoma = require('randoma');
const { green, red } = require('chalk');
const { scope } = require('minimist')(process.argv.slice(2));

const random = new Randoma({ seed: Math.ceil(Math.random() * 10, 10) });
const { microfrontends } = require('../../package.json');

const getConfig = (command) => (mfe) => ({
  command: `${command} --prefix microfrontends/${mfe}`,
  name: mfe,
  prefixColor: random.color(0.5).hex().toString(),
});

const filterIfArgs = (list) => {
  if (scope) {
    const mfeList = scope.replace(/\s+/g, '').split(',');
    return list.filter((mfe) => mfeList.includes(mfe));
  }

  return list;
};

const concurrentProcesses = (command) =>
  filterIfArgs(microfrontends).map(getConfig(command));

const getNPMCommand = (command) =>
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

module.exports = getNPMCommand;
