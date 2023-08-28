import { FunctionComponent } from "react";

export type Release =
  | "innerGlow"
  | "sweet"
  | "comeAgain"
  | "fireside"
  | "maybeImWrong"
  | "seemsToMe"
  | "places"
  | "today"
  | "valentinesDay";

export type ReleaseDetails = {
  type: "song" | "album";
  title: string;
  album?: Release;
  imageSrc: string;
  spotifyId: string;
  youtubeId: string;
  released: number;
};

export type SocialItem = {
  icon: FunctionComponent;
  href: string;
  className: string;
};
