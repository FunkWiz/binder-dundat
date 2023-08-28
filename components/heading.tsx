import Image from "next/image";
import { SpotifyIcon } from "../icons";
import { releases } from "@/releases";
import { generateSpotifyAlbumUrl } from "@/utils";

export function Heading() {
  return (
    <div className="p-4 pt-16 flex flex-col items-center gap-6 justify-center w-full text-center">
      <Image
        src="/logo.png"
        alt="Binder Dundat"
        width={500}
        height={50}
        draggable={false}
        className="select-none max-w-[80%] h-auto"
        priority
      />
      <h2 className="text-theme-ig uppercase tracking-[20px] md:text-3xl text-1xl flex items-center justify-center">
        Inner Glow
        <a
          href={generateSpotifyAlbumUrl(releases.innerGlow.spotifyId)}
          className="text-theme-ig text-sm underline"
          target="_blank"
        >
          <SpotifyIcon />
        </a>
      </h2>
    </div>
  );
}
