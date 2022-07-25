/**
 * This project coded by Arshia#9402
 
 * This project coded by Arshia#9402
*/

const { Client, Intents , Collection } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});


const { readdirSync } = require("fs");
const { token , BugChannelId} = require("./config.json");




client.commands = new Collection();
const commandFiles = readdirSync('./cmd').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	client.commands.set(command.data.name, command);
	console.log(command.data.name + '✅');
}



process.on('unhandledRejection', err => {
	console.log(err);
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		if (interaction.guild) {
			await command.execute(interaction, client);
		} else {
			return interaction.reply({ content: 'Interactions Only Works In Servers', ephemeral: true });
		}

	} catch (error) {
		console.error(error);
	}
});

client.on("messageCreate" , (message) => {
	if (message.channel.id === `${BugChannelId}`) {
		message.react("👍")
        message.react("👎")

	}
})



client.login(token)

/**
 * This project coded by Arshia#9402
 
 * This project coded by Arshia#9402

 */
