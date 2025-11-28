// React ka useState hook import karte hain
import { useState } from "react";
// Music context se data lene ke liye
import { useMusic } from "./content/MusicContent";

// Ye component playlists banata aur manage karta hai
export const Playlists = () => {
    // Local states
    const [newPlaylistName, setNewPlaylistName] = useState(""); // nayi playlist ka naam
    const [selectedPlaylist, setSelectedPlaylist] = useState(null); // kaunsi playlist select hai
    const [searchQuery, setSearchQuery] = useState(""); // search bar ka input
    const [showDropdown, setShowDropdown] = useState(false); // dropdown dikhana ya nahi

    // Context se values nikal rahe hain

    const {
        playlists, createPlaylist, allSongs,
        addSongToPlaylist, currentTrackIndex,
        handlePlaySong, deletePlaylist
    } = useMusic();

    // Search ke hisaab se songs filter karna
    const filteredSongs = allSongs.filter((song) => {
        const matches =
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase());

        const isAlreadyInPlaylist = selectedPlaylist?.songs.some(
            (playlistSong) => playlistSong.id === song.id
        );

        return matches && !isAlreadyInPlaylist;
    });

    // Nayi playlist create karna
    const handleCreatePlaylist = () => {
        if (newPlaylistName.trim()) {
            createPlaylist(newPlaylistName.trim());
            setNewPlaylistName("");
        }
    };

    // Song ko playlist mein add karna
    const handleAddSong = (song) => {
        if (selectedPlaylist) {
            addSongToPlaylist(selectedPlaylist.id, song);
            setSearchQuery("");
            setShowDropdown(false);
        }
    };

    // Playlist se song play karna
    const handlePlayFromPlaylist = (song) => {
        const globalIndex = allSongs.findIndex((s) => s.id === song.id);
        handlePlaySong(song, globalIndex);
    };

    // Playlist delete karna (confirmation ke sath)
    const deletePlaylistConfirmation = (playlist) => {
        if (window.confirm(`Are you sure you want to delete "${playlist.name}"?`)) {
            deletePlaylist(playlist.id);
        }
    };

    return (
        <div className="border border-gray-950 bg-gray-900 rounded-2xl py-3 px-4 w-100 text-white m-auto mt-6 font-semibold">
            <h2>Playlists</h2>

            {/* Create New Playlist */}
            <div className="create-playlist">
                <h3>Create New Playlist</h3>
                <div className="flex gap-3 mt-1 mb-1">
                    <input className="border px-1 rounded"
                        type="text"
                        placeholder="Playlist name..."
                        onChange={(e) => setNewPlaylistName(e.target.value)}
                        value={newPlaylistName}
                    />
                    <button className="border border-gray-500 px-3 rounded cursor-pointer" onClick={handleCreatePlaylist}>Create</button>
                </div>
            </div>

            {/* Playlists List */}
            <div className="playlists-list">
                {playlists.length === 0 ? (
                    <p>No playlists created yet</p>
                ) : (
                    playlists.map((playlist, key) => (
                        <div key={key} className="playlist-item">
                            <div className="playlist-header">
                                <h3>{playlist.name}</h3>
                                <button className="border border-gray-500 px-3 rounded cursor-pointer mt-1 mb-2" onClick={() => deletePlaylistConfirmation(playlist)}>Delete</button>
                            </div>

                            {/* Add Song Search */}
                            <input className="border border-gray-500 px-3 rounded cursor-pointer"
                                type="text"
                                placeholder="Search songs to add..."
                                value={selectedPlaylist?.id === playlist.id ? searchQuery : ""}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setSelectedPlaylist(playlist);
                                    setShowDropdown(e.target.value.length > 0);
                                }}
                            />

                            {selectedPlaylist?.id === playlist.id && showDropdown && (
                                <div className="song-dropdown">
                                    {filteredSongs.length === 0 ? (
                                        <div>No songs found</div>
                                    ) : (
                                        filteredSongs.slice(0, 5).map((song, key) => (
                                            <div key={key} onClick={() => handleAddSong(song)}>
                                                {song.title} - {song.artist}
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}

                            {/* Playlist Songs */}
                            <div className="playlist-songs">
                                {playlist.songs.length === 0 ? (
                                    <p>No songs in this playlist</p>
                                ) : (
                                    playlist.songs.map((song, key) => (
                                        <div
                                            key={key}
                                            className={`playlist-song ${currentTrackIndex === allSongs.findIndex((s) => s.id === song.id)
                                                ? "active"
                                                : ""
                                                }`}
                                            onClick={() => handlePlayFromPlaylist(song)}
                                        >
                                            {song.title} - {song.artist} ({song.duration})
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
