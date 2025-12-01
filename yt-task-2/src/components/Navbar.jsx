// React Router se Link aur useLocation import karte hain
import { Link, useLocation } from "react-router";

// Ye component navigation bar banata hai
export const Navbar = () => {
    // useLocation se current URL path milta hai
    const location = useLocation();

    return (
        <nav className="navbar border font-medium bg-gray-900 border-gray-950 rounded-2xl flex justify-between w-210 mt-7 m-auto py-4 px-6 text-white">
            {/* Brand / Logo */}
            <div className="navbar-brand">
                <Link className="brand-link" to="/">
                    🎵 Music Player
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="navbar-links gap-4 flex">
                {/* All Songs link */}
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                >
                    All Songs
                </Link>

                {/* Playlists link */}
                <Link
                    to="/playlists"
                    className={`nav-link ${location.pathname === "/playlists" ? "active" : ""
                        }`}
                >
                    Playlists
                </Link>
            </div>
        </nav>
    );
};
