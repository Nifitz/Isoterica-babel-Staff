const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('test'),
	async execute(interaction) {
		await interaction.reply('nigga');
	},
};
