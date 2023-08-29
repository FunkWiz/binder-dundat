"use client";

import dayjs from "dayjs";
import { ReleaseDetails } from "@/types";
import { FaVideo, FaHeadphonesSimple } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { FunctionComponent, ReactNode, useMemo } from "react";
import { generateSpotifyTrackUrl, generateYoutubeVideoUrl } from "@/utils";
import { track } from "@vercel/analytics/react";

export interface SongArticleProps {
  title: string;
  description: string;
  date: number;
  release: ReleaseDetails;
}

function ExternalLink(props: {
  icon: FunctionComponent;
  href: string;
  text: string;
  release: ReleaseDetails;
}) {
  const { icon: Icon, text, href, release } = props;

  return (
    <a
      href={href}
      target="_blank"
      className={twMerge(
        "flex rounded-lg group mr-auto items-center gap-2 border border-opacity-60",
        "md:-translate-x-1.5 md:hover:translate-x-0",
        "md:hover:border-theme-ig md:hover:border-opacity-100 md:rounded-lg md:p-1.5 md:transition-all"
      )}
      onClick={() => {
        track("article-click", {
          ...release,
          text,
          href,
        });
      }}
    >
      <span className="md:group-hover:text-theme-ig md:transition-colors">
        {text}
      </span>
      <div className="md:group-hover:animate-bounce md:group-hover:text-theme-ig md:transition-colors">
        <Icon />
      </div>
    </a>
  );
}

function SpotifyLink(props: ReleaseDetails) {
  const { spotifyId } = props;

  return (
    <ExternalLink
      href={generateSpotifyTrackUrl(spotifyId)}
      icon={FaHeadphonesSimple}
      text="Listen"
      release={props}
    />
  );
}

function YoutubeLink(props: ReleaseDetails) {
  const { youtubeId } = props;

  return (
    <ExternalLink
      href={generateYoutubeVideoUrl(youtubeId)}
      icon={FaVideo}
      text="Watch"
      release={props}
    />
  );
}

export function SongArticle(props: SongArticleProps) {
  const { title, description, date, release } = props;
  const { imageSrc, title: trackTitle, spotifyId, youtubeId } = release;

  return (
    <article className="bg-slate-200 rounded-lg p-4 flex gap-3.5 text-slate-700 w-full">
      <div className="flex items-center gap-2 shrink-0">
        <Image
          src={imageSrc}
          alt={`${trackTitle}'s image`}
          width={100}
          height={100}
          className="mb-auto rounded-[4px] md:hover:scale-125 md:z-10 md:origin-center md:transition-all md:hover:shadow-lg shadow-theme-ig"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-lg">{title}</span>
          <span className="text-sm font-thin">
            {dayjs(date).format("MMM DD, YYYY")}
          </span>
        </h4>
        <p className="flex-wrap">{description}</p>
        <ul className="flex gap-2.5 mt-auto flex-wrap">
          {spotifyId && (
            <li>
              <SpotifyLink {...release} />
            </li>
          )}
          {youtubeId && (
            <li>
              <YoutubeLink {...release} />
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
