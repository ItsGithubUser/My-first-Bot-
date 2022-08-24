// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js');
const { token, prefix } = require('./config.json');

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('The Bot is Ready!');
});

client.on('messageCreate', message => {

    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase();

    if (message.author.bot) {
        return
    }

    if (cmd === "welcome") {
        message.reply("Welcome too!")
    }

    if (message.content == "hi") {
        message.reply('welcome')
    }

    if (message.content == 'جمعه مباركه') {
        message.reply(`جمعه مباركه عليك وعلينا`)
    }

    if (cmd === 'server') {
        let EmbedBuilder = new MessageEmbed()
            .setColor('DARK_GOLD')
            .setAuthor(message.guild.name,
                message.guild.iconURL({ dynamic: true }))

            .setDescription(`Server Owner: <@${message.guild.ownerId}> 
             OwnerID: ${message.guild.ownerId} 
             Members: ${message.guild.memberCount} 
             CreatedAT: ${message.guild.createdAt.toLocaleString()}`)

            .setThumbnail(message.guild.iconURL({ dynamic: true }))


        message.reply({ embeds: [EmbedBuilder] })

        console.log({ embeds: [EmbedBuilder] })

    }

    if (cmd === 'user') {
        let member = message.mentions.members.first();
        let Embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
            .setFields(
                { name: 'UserName:', value: member.user.username, name: 'CreatedAT:', value: member.user.createdAt.toLocaleString() }
            )
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setFooter()

        message.reply({ embeds: [Embed] })


    }


    console.log(message.content)

})


// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;

//     const { commandName } = interaction;

//   ىيخث .  if (commandName === 'ping') {
//         await interaction.reply('اي يسطا عايز ايه');
//     } else if (commandName === 'server') {
//         await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
//     } else if (commandName === 'user') {
//         await interaction.reply('User info.');
//     }
// });

// Login to Discord with your client's token
client.login(token);
