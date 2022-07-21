const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require("./config.json");

const commands = [
	new SlashCommandBuilder()
    .setName("bug")
    .setDescription("گزارش باگ")
    .addStringOption(option => 
        option.setName('text')
        .setDescription('متن گزارش باگ را بنویسید')
        .setRequired(true)
    ),
]

	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


/**
 * 
 * This project coded by Arshia#9402
 
 * This project coded by Arshia#9402

 */