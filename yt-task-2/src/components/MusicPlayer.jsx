// React ke hooks import karte hain
import { useRef, useEffect } from "react";
// Music context se data lene ke liye
import { useMusic } from "./content/MusicContent";

// Ye component actual music player banata hai
export const MusicPlayer = () => {
    // Context se sab values nikal rahe hain
    const {
        currentTrack, formatTime, currentTime, setCurrentTime,
        duration, setDuration, nextTrack, prevTrack,
        isPlaying, pause, play, volume, setVolume
    } = useMusic();

    // Audio element ko reference dene ke liye
    const audioRef = useRef(null);

    // Progress bar change karne par time update
    const handleTimeChange = (e) => {
        const audio = audioRef.current;
        if (!audio) return;
        const newTime = parseFloat(e.target.value);
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    // Volume change karne par update
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    // Volume ko audio element par apply karna
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = volume;
    }, [volume]);

    // Play/pause ko audio element par apply karna
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.play().catch((err) => console.error(err));
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    // Metadata aur events handle karna
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => setDuration(audio.duration);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleEnded = () => nextTrack();

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("canplay", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("canplay", handleLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [setDuration, setCurrentTime, currentTrack, nextTrack]);

    // Jab track change ho to reset karna
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.load();
        setCurrentTime(0);
        setDuration(0);
    }, [currentTrack, setCurrentTime, setDuration]);

    // Progress bar percentage calculate karna
    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (

        <div className="m-auto flex w-120 flex-col justify-center mt-3 border border-gray-950 rounded-2xl bg-gray-900 text-white font-semibold w-100 py-5 px-4">
            {/* Audio element */}
            <audio ref={audioRef} src={currentTrack.url} preload="metadata" crossOrigin="anonymous" />
            <div className="m-auto flex flex-col gap-4">
                {/* Track info */}
                <div className="track-info">
                    <h3 className="track-title">{currentTrack.title}</h3>
                    <p className="track-artist">{currentTrack.artist}</p>
                </div>

                {/* Progress bar */}
                <div className="flex gap-3">
                    <span className="time">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        step="0.1"
                        value={currentTime || 0}
                        className="progress-bar"
                        onChange={handleTimeChange}
                        style={{ "--progress": `${progressPercentage}%` }}
                    />
                    <span className="time">{formatTime(duration)}</span>
                </div>

                {/* Controls */}
                <div className="m-auto text-2xl">
                    <button onClick={prevTrack}>⏮</button>
                    <button onClick={() => (isPlaying ? pause() : play())}>
                        {isPlaying ? "⏸" : "▶"}
                    </button>
                    <button onClick={nextTrack}>⏭</button>
                </div>

                {/* Volume control */}
                <div className="flex gap-3">
                    <span>🔊</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        onChange={handleVolumeChange}
                        value={volume}
                    />
                </div>
            </div>
        </div>
    );
};
