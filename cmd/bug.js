const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { DeveloperIdRole ,  BugChannelId } = require("../config.json");

module.exports = {
    data : new SlashCommandBuilder()
    .setName("bug")
    .setDescription("گزارش باگ")
    .addStringOption(option => 
        option.setName('text')
        .setDescription('متن گزارش باگ را بنویسید')
        .setRequired(true)
    ),

    async execute(interaction , client ) {

        const text = interaction.options.getString('text')
        const BugCh = client.channels.cache.get(BugChannelId)


        const ReportEmbed = new MessageEmbed()
        .setTitle("باگ گزارش شده توسط :" + `${interaction.user.tag}`)
        .setColor("RED")
        .setThumbnail(interaction.user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setDescription(`${text}`)
        .setTimestamp()

        BugCh.send({ content : `<@&${DeveloperIdRole}>` , embeds: [ReportEmbed]}).then(() => {
            return interaction.reply({ content : " ✅ | گزارش با موفقیت فرستاده شد "})
        })

    }
}

/**
 * This project coded by Arshia#9402
 
 * This project coded by Arshia#9402

 */
