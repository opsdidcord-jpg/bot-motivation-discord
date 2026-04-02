require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { getNextMessage } = require("./messages");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.Message],
});

const TARGET_USER_ID = "913682240465170432";

async function sendMotivationalMessage() {
  try {
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
  client.user.setPresence({ status: "online" });
  console.log(`🎯 Cible : ${TARGET_USER_ID}`);
  console.log(`⏰ Envoi toutes les heures...\n`);
  sendMotivationalMessage();
  setInterval(sendMotivationalMessage, 60 * 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);
