const messages = [
  "💡 **Méthode du jour :** Vends tes bots Discord sur Fiverr ou Gumroad. Un bon bot peut se vendre entre 20€ et 500€ !",
  "🚀 **Tips Roblox :** 1000 visites/jour + 1% qui achète un gamepass = des Robux qui s'accumulent vite. Et ça scale !",
  "💻 **Freelance :** Propose tes services sur des serveurs Discord de devs. Commence à 10-15€/heure et augmente avec l'expérience.",
  "📈 **Mindset millionnaire :** Les millionnaires ont en moyenne 7 sources de revenus. T'as déjà dev Roblox + bots Discord. Quelle sera ta 3ème source ?",
  "🎮 **Roblox tip :** Ajoute des daily rewards dans ton jeu pour fidéliser les joueurs et booster ta rétention.",
  "🔥 **Action du jour :** Ouvre Fiverr aujourd'hui et crée un gig pour tes services. La visibilité se construit avec le temps.",
  "💎 **Investis en toi :** Chaque heure à apprendre quelque chose de nouveau vaut 10x plus qu'une heure à scroller.",
  "🛠️ **Idée projet :** Un bot tout-en-un vendu en licence à 5-10€/mois. 100 clients = 500-1000€/mois passifs !",
  "📊 **Stats motivantes :** La plupart des devs millionnaires ont commencé à coder à ton âge. T'as une longueur d'avance énorme.",
  "⚡ **Critique constructive :** Tes projets ont un bon README avec screenshots et démo ? C'est ce qui fait la différence pour vendre.",
  "🌍 **Pense global :** Vends en anglais. Le marché anglophone est 10x plus grand qu'en France.",
  "🎯 **Focus :** Finis 1 projet parfaitement plutôt que d'en commencer 10. Un produit fini vaut infiniment plus.",
  "💬 **Networking :** Aide les gens gratuitement dans des serveurs devs. Les clients viennent souvent du bouche à oreille.",
  "📱 **Diversifie :** Apprends les bases de React ou d'une API (Stripe, OpenAI) pour proposer des services web en plus.",
  "🏆 **Rappel :** Être millionnaire à 18-20 ans c'est possible dans la tech. Travaille aujourd'hui, même 30 min.",
  "🔑 **Secret des riches :** Ils vendent des systèmes qui tournent sans eux. Ton bot 24h/24 = revenu passif potentiel.",
  "📚 **Apprends aujourd'hui :** Les webhooks, les API REST, TypeScript. Chaque skill = ta valeur sur le marché augmente.",
  "💪 **T'es déjà dev à ton âge.** C'est rare. La régularité bat le talent sur le long terme. Continue.",
  "🎪 **Marketing tip :** Fais une démo vidéo de 30 sec sur TikTok/YouTube. Les acheteurs veulent voir avant d'acheter.",
  "🌱 **Patience :** Rome s'est construite tous les jours. Code aujourd'hui, même un peu.",
];

function getNextMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

module.exports = { getNextMessage };
