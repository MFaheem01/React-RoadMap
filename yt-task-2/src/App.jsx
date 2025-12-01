// Import kar rahe hain components aur tools
import { MusicPlayer } from "./components/MusicPlayer";
import { AllSongs } from "./components/AllSong";
import { Playlists } from "./components/PlayList";
import { BrowserRouter, Routes, Route } from "react-router";
import { MusicProvider } from "./components/content/MusicContent";
import { Navbar } from "./components/Navbar";

// Ye main App component hai
function App() {
  return (
    // BrowserRouter: routing ke liye wrapper
    <BrowserRouter>
      {/* MusicProvider: context ke zariye data share karne ke liye */}
      <MusicProvider>
        <div className="app">
          {/* Navbar: upar navigation bar */}
          <Navbar />

          {/* Main content area */}
          <main className="app-main flex justify-center gap-10">
            {/* Player section: music player */}
            <div className="player-section">
              <MusicPlayer />
            </div>

            {/* Content section: routes ke hisaab se page change hoga */}
            <div className="content-section">
              <Routes>
                {/* "/" route par AllSongs component */}
                <Route path="/" element={<AllSongs />} />
                {/* "/playlists" route par Playlists component */}
                <Route path="/playlists" element={<Playlists />} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

// App ko export kar rahe hain taake use ho sake
export default App;
