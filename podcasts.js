const podcasts = [
  {
    title: "How I Built This — Guy Raz (NPR)",
    url: "https://www.npr.org/podcasts/510313/how-i-built-this",
  },
  {
    title: "The Tim Ferriss Show — Outils et stratégies des meilleurs au monde",
    url: "https://tim.blog/podcast/",
  },
  {
    title: "My First Million — Idées business et opportunités",
    url: "https://www.mfmpod.com/",
  },
  {
    title: "Foundr Podcast — Interviews d'entrepreneurs millionnaires",
    url: "https://foundr.com/articles/podcast",
  },
  {
    title: "The GaryVee Audio Experience — Mindset et entrepreneuriat",
    url: "https://www.garyvaynerchuk.com/podcast/",
  },
  {
    title: "Entrepreneurs on Fire — John Lee Dumas",
    url: "https://www.eofire.com/podcast/",
  },
  {
    title: "Smart Passive Income — Pat Flynn",
    url: "https://www.smartpassiveincome.com/shows/spi/",
  },
  {
    title: "The School of Greatness — Lewis Howes",
    url: "https://lewishowes.com/blog/category/podcast/",
  },
];

function getRandomPodcast() {
  return podcasts[Math.floor(Math.random() * podcasts.length)];
}

module.exports = { getRandomPodcast };
