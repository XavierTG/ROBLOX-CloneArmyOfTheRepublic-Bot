
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.generateInvite(['ADMINISTRATOR'])
  .then(link => {
    console.log(`Generated bot invite link: ${link}`);
  });
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return msg.channel.sendMessage("Sorry, but I am currently not capable of responding to DMs.");
  console.log(`${msg.author.username} sent "${msg.content}" in #${msg.channel.name}`);
  let channel = msg.channel.guild.channels.find(`name`, `messagelogs`);
  channel.sendMessage(`${msg.author.username} sent "${msg.content}" in ${msg.channel}`);
  channel.sendMessage('________________');
  if (msg.content === '-CAR-test') {
    msg.reply('this is a test response to a test prompt message.');
    return;
  }
  if (msg.content === '-CAR-botinfo') {
    msg.reply('this discord bot is scripted and managed by XavierTG for usage by the ROBLOX group: -Clone Army Of The Republic-. This bot is in pre-alpha testing and is lacking many features at the moment. For more information, visit the partially complete bot concept document (will be updated every other day or daily) at https://github.com/XavierTG/ROBLOX-CloneArmyOfTheRepublic-Bot/blob/master/BotConcept.md');
    return;
  }
  if (msg.content === '-CAR-help') {
    msg.reply('here is a list of available commands: -CAR-test, -CAR-botinfo, -CAR-announce');
  }
  if (msg.content === '-CAR-announce') {
    return msg.reply('this command is imcomplete but coming soon!');
    msg.reply('do you want the announcement to be discord only, in-game only, or both?');
});

client.login(process.env.BOT_TOKEN);
