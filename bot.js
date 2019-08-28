const Discord = require('discord.js');
const client = new Discord.Client();

client.on('read',() => {
   console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping'){
      message.reply('ping'){
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
