const chalk = require("chalk");
const foo = require("@ctrlplusb/yarn-workspace-root-bug-foo");

module.exports = `I am ${chalk.blueBright("bar")}, I am not ${foo}`;
