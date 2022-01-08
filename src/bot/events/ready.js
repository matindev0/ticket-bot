const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("AMG OP!")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Is Ready"));

    await /*client.user.setActivity(require('../../config/bot').prefix + "help BY NOT POWER"); // Don't Remove Credits Might Get You in Danger*/
      client.user.setActivity("discord.gg/light-moon")
    await client.user.setStatus("online");
}
