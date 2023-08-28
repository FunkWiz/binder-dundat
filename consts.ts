import { Release, ReleaseDetails, SocialItem } from "./types";
import { FacebookIcon, InstagramIcon, SpotifyIcon, YoutubeIcon } from "./icons";

export const SPOTIFY_URL =
  "https://open.spotify.com/artist/1coR5FdLQXwbu8dLM1yEBS";
export const FACEBOOK_URL = "https://www.facebook.com/binderdundat.music";
export const INSTAGRAM_URL = "https://www.instagram.com/binder.dundat/";
export const YOUTUBE_URL = "https://www.youtube.com/@binderdundat1801";

export const socialItems: SocialItem[] = [
  {
    icon: SpotifyIcon,
    href: SPOTIFY_URL,
    className: "md:hover:text-green-400 hidden",
  },
  {
    icon: FacebookIcon,
    href: FACEBOOK_URL,
    className: "md:hover:text-blue-400",
  },
  {
    icon: InstagramIcon,
    href: INSTAGRAM_URL,
    className: "md:hover:text-pink-400",
  },
  {
    icon: YoutubeIcon,
    href: YOUTUBE_URL,
    className: "md:hover:text-red-800",
  },
];
