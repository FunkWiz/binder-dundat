import { SongArticle } from "@/components/song-article";
import { releases } from "@/releases";

export default function Home() {
  return (
    <>
      <SongArticle
        title={`${releases.fireside.title}'s Music Video is OUT! 💥`}
        description={`
        ${releases.fireside.title}'s music video is finally out, its available on Youtube 
        so you can simply click the "Watch" button below to watch it.
        Enjoy!
        `}
        release={releases.fireside}
        date={new Date("Aug 31, 2023").getTime()}
      />
      <SongArticle
        title={`${releases.fireside.title} - Music Video`}
        description={`
        A little long after its release, 
        ${releases.fireside.title} is getting a cool music video. Get ready for some awesome visuals!
         We're busy working on new stuff, so expect some new releases to be delievered soon.
        `}
        release={releases.fireside}
        date={new Date("Aug 28, 2023").getTime()}
      />
    </>
  );
}
