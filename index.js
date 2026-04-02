require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { getNextMessage } = require("./messages");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.Message],
});

const TARGET_USER_ID = "913682240465170432";
const GUILD_ID = process.env.GUILD_ID;

async function sendMotivationalMessage() {
  try {
    const guild = await client.guilds.fetch(GUILD_ID);
    const member = await guild.members.fetch(TARGET_USER_ID);
    const presence = member.presence;
    const isOnline =
      presence &&
      presence.status !== "offline" &&
      presence.status !== "invisible";

    if (!isOnline) {
      console.log(`[${new Date().toLocaleTimeString()}] 😴 Hors ligne — aucun message envoyé.`);
      return;
    }

    const user = await client.users.fetch(TARGET_USER_ID);
    const dm = await user.createDM();
    await dm.send(getNextMessage());

    console.log(`[${new Date().toLocaleTimeString()}] ✅ Message envoyé en MP !`);
  } catch (err) {
    console.error(`[ERREUR] ${err.message}`);
  }
}

client.once("ready", () => {
  console.log(`✅ Bot connecté : ${client.user.tag}`);
  console.log(`🎯 Cible : ${TARGET_USER_ID}`);
  console.log(`⏰ Vérification toutes les heures...\n`);
  sendMotivationalMessage();
  setInterval(sendMotivationalMessage, 60 * 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);