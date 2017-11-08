
const Discord = require("discord.js");
const botSettings = require("./botsettings.json");
const bot = new Discord.Client();
const prefix = botSettings.prefix;
bot.on("ready", async() => {
  console.log(`Bot is ready! ${bot.user.username}`);
  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"])
    console.log(link);
  } catch(e) {
    console.log(e.stack);
  }
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.channel.sendMessage("Sorry, but I don't have the capability to respond to DMs at the moment.");

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  console.log(messageArray);
  console.log(command);
  console.log(args);

  if(!command.startsWith(prefix)) return;
  if(command === `${prefix}test`) {
    message.channel.sendMessage("This is a test response to a test message.");
    return;
  }
  if(command === `${prefix}botinfo`) {
    message.channel.sendMessage("This is a work in progress bot for the ROBLOX group -Clone Army of the Republic-. More information available at https://github.com/XavierTG/ROBLOX-CloneArmyOfTheRepublic-Bot/commit/a428a61da57738c0ec067c3199f21538bc2ec4f8?short_path=6e68727#diff-6e68727603fd21cce510f36e6cf17477.");
  }

});

bot.login(botSettings.token);
