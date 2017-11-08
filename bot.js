
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const link = client.generateInvite(["ADMINISTRATOR"]);
  console.log(link)
});

client.on('message', msg => {
  console.log(msg.author.username);
  console.log(msg.content);
  console.log("CHANNEL ID: ${msg.channel.id}");
  msg.channel.guild.channels.333653329664147457.sendMessage("Message sent by ${msg.author.username} in ${msg.channel.name}.");
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return msg.channel.sendMessage("Sorry, but I am currently not capable of responding to DMs.");
  if (msg.content === '-CAR-test') {
    msg.reply('This is a test response to a test prompt message.');
    return;
  }
  if (msg.content === '-CAR-botinfo') {
    msg.reply('This discord bot is scripted and managed by XavierTG for usage by the ROBLOX group: -Clone Army Of The Republic-. This bot is in pre-alpha testing and is lacking many features at the moment. For more information, visit the partially complete bot concept document (will be updated every other day or daily) at https://github.com/XavierTG/ROBLOX-CloneArmyOfTheRepublic-Bot/blob/master/BotConcept.md');
    return;
  }
});

client.login(process.env.BOT_TOKEN);
