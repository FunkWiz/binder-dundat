import { SongArticle } from "@/components/song-article";
import { songs, releases } from "@/releases";

export default function Releases() {
  return (
    <>
      {songs.map((song) => (
        <SongArticle
          key={song.spotifyId}
          title={song.title}
          description={
            releases[song.album!].title !== song.title
              ? `Album - ${releases[song.album!].title}`
              : ""
          }
          release={song}
          date={song.released}
        />
      ))}
    </>
  );
}
