require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { getNextMessage } = require("./messages");
const { getRandomPodcast } = require("./podcasts");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.Message],
});

const TARGET_USER_ID = "913682240465170432";
const VOCAL_CHANNEL_ID = "1489337029878878401";
const TEXT_CHANNEL_ID = "1489669342827118673";

// Envoi MP motivant toutes les heures
async function sendMotivationalMessage() {
  try {
    const user = await client.users.fetch(TARGET_USER_ID);
    const dm = await user.createDM();
    await dm.send(getNextMessage());
    console.log(`[${new Date().toLocaleTimeString()}] ✅ Message MP envoyé !`);
  } catch (err) {
    console.error(`[ERREUR MP] ${err.message}`);
  }
}

// Détection vocal
client.on("voiceStateUpdate", async (oldState, newState) => {
  try {
    // Une personne rejoint le vocal ciblé
    if (newState.channelId === VOCAL_CHANNEL_ID && oldState.channelId !== VOCAL_CHANNEL_ID) {
      const user = newState.member.user;
      const textChannel = await client.channels.fetch(TEXT_CHANNEL_ID);
      const podcast = getRandomPodcast();

      await textChannel.send(
        `🎙️ <@${user.id}> est dans la vocal ! Voilà un podcast business pour t'inspirer :\n\n**${podcast.title}**\n${podcast.url}`
      );

      console.log(`[${new Date().toLocaleTimeString()}] 🎙️ ${user.tag} a rejoint le vocal → podcast envoyé !`);
    }
  } catch (err) {
    console.error(`[ERREUR VOCAL] ${err.message}`);
  }
});

client.once("ready", () => {
  console.log(`✅ Bot connecté : ${client.user.tag}`);
  client.user.setPresence({ status: "online" });
  console.log(`⏰ Envoi MP toutes les heures...\n`);
  sendMotivationalMessage();
  setInterval(sendMotivationalMessage, 60 * 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);
