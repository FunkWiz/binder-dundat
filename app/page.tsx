import { SongArticle } from "@/components/song-article";
import { releases } from "@/releases";

export default function Home() {
  return (
    <>
      <SongArticle
        title={`${releases.fireside.title} - Music Video`}
        description={`
        A little long after its release, 
        Fireside is getting a cool music video. Get ready for some awesome visuals!
         We're busy working on new stuff, so expect some new releases to be delievered soon.
        `}
        release={releases.fireside}
        date={new Date("Aug 28, 2023").getTime()}
      />
    </>
  );
}
