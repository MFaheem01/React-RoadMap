// Context se data lene ke liye import karte hain
import { useMusic } from "./content/MusicContent";

// Ye component sabhi songs ko dikhata hai
export const AllSongs = () => {
    // Context se values nikal rahe hain
    const { allSongs, handlePlaySong, currentTrackIndex } = useMusic();

    return (
        <div className="w-100 m-auto border-gra-900 border-gray-950 border p-4 px-3 font-medium rounded-2xl mt-6 bg-gray-900 text-white">
            {/* Heading mein total songs count */}
            <h2>All Songs ({allSongs.length})</h2>

            {/* Songs ko grid mein dikhana */}
            <div className="songs-grid">
                {allSongs.map((song, key) => (
                    <div
                        key={key} // unique key React ke liye
                        className={`song-card ${currentTrackIndex === key ? "active" : ""}`}
                        onClick={() => handlePlaySong(song, key)} // song play karne ke liye
                    >
                        {/* Song ki info */}
                        <div className="song-info">
                            <h3 className="song-title">{song.title}</h3>
                            <p className="song-artist">{song.artist}</p>
                            <span className="song-duration">{song.duration}</span>
                        </div>

                        {/* Play button ya music icon */}
                        <div className="play-button">
                            {currentTrackIndex === key ? "♪" : "▶"}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
