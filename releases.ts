import { Release, ReleaseDetails } from "./types";

export const releases: Record<Release, ReleaseDetails> = {
  innerGlow: {
    type: "album",
    imageSrc: "/small-ig.jpg",
    spotifyId: "4ZohFuuujBVzN6WynXt8hz?si=44vi7qKGReCahr7jG32Ziw",
    youtubeId: "",
    title: "Inner Glow",
    released: 1661547600000,
  },
  sweet: {
    type: "song",
    imageSrc: "/small-ig.jpg",
    album: "innerGlow",
    spotifyId: "2sR243UZTRpFoTmKa44TtA?si=52dff9c4320c4216",
    youtubeId: "Nu-tO1hMg3I",
    title: "Sweet",
    released: 1661547600000,
  },
  comeAgain: {
    type: "song",
    imageSrc: "/small-ig.jpg",
    album: "innerGlow",
    spotifyId: "5k7WkYOn6qMHn9Wz4PQYbp",
    youtubeId: "B8YkJ1B-kvM",
    title: "Come Again",
    released: 1661547600000,
  },
  maybeImWrong: {
    type: "song",
    imageSrc: "/small-ig.jpg",
    album: "innerGlow",
    spotifyId: "67Y8bAWnibhmDFLMPRE5N8",
    youtubeId: "",
    title: "Maybe I'm Wrong",
    released: 1661547600000,
  },
  seemsToMe: {
    type: "song",
    imageSrc: "/small-ig.jpg",
    album: "innerGlow",
    spotifyId: "7nBcBFU4VoMhyKkP5hoRzo",
    youtubeId: "",
    title: "Seems to Me",
    released: 1661547600000,
  },
  fireside: {
    type: "song",
    imageSrc: "/small-fireside.jpg",
    album: "innerGlow",
    spotifyId: "6Jcuu02stU1oKMQrYUTHyB",
    youtubeId: "GaegO1ka37Q",
    title: "Fireside",
    released: 1661547600000,
  },
  places: {
    type: "song",
    imageSrc: "/small-places.jpg",
    album: "places",
    spotifyId: "2nQ6cWY3QuzsagZAQP0DBH",
    youtubeId: "0_aQnjeGj10",
    title: "Places",
    released: 1539550800000,
  },
  valentinesDay: {
    type: "song",
    imageSrc: "/small-valentines.jpg",
    album: "valentinesDay",
    spotifyId: "0XVnLAEEtIDWG4uF3VFW28",
    youtubeId: "-dlKXcsNRMM",
    title: "Valentine's Day",
    released: 1580940000000,
  },
  today: {
    type: "song",
    imageSrc: "/small-today.jpg",
    album: "today",
    spotifyId: "58II4DwYIIShESoeGkPrgV",
    youtubeId: "IE7podYmyIw",
    title: "Today",
    released: 1614290400000,
  },
};

export const songs = Object.values(releases)
  .filter((release) => release.type === "song")
  .sort((a, b) => {
    if (a.youtubeId.length > 0 && b.youtubeId.length === 0) return -1;
    if (a.youtubeId.length === 0 && b.youtubeId.length > 0) return 1;

    return b.released - a.released;
  });
