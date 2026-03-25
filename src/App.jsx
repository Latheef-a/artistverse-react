import { useState } from "react";
import "./App.css";
import artistsData from "./data/artists";
import ArtistCard from "./components/ArtistCard";

function App() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredArtists = artistsData.filter((artist) => {
    const matchName =
      artist.name &&
      artist.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    const matchCategory =
      category === "All" || artist.category === category;

    return matchName && matchCategory;
  });

  const toggleFavorite = (artist) => {
    setFavorites((prev) =>
      prev.find((a) => a.id === artist.id)
        ? prev.filter((a) => a.id !== artist.id)
        : [...prev, artist]
    );
  };

  return (
    <div className="app-container">
      {/* ================= HEADER ================= */}
      <header className="app-header">
        <div className="header-top">
          <div className="title-section">
            <h1 className="app-title">✨Creativa</h1>
            <p className="app-subtitle">Discover creative minds</p>
          </div>

         <button
          className="favorites-header"
          onClick={() => setShowFavorites(!showFavorites)}
           >
            {showFavorites
              ? "← Back"
              : `❤️ Favorites (${favorites.length})`}
        </button>
        </div>
        
        <div className="header-bottom">
          <input
            type="text"
            placeholder="Search by name or category..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="category-filters">
            {["All", "Sketch", "Music", "Photography", "Director"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  category === cat ? "active" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>
      <div className="hero-section">
  <h2>Explore Creative Talent 🎨</h2>
  <p>
    Discover directors, musicians, photographers and sketch artists in one place.
  </p>
</div>

  <h2 className="section-title">Top Creators ⭐</h2>
            <div className="category-preview">
  {["🎬 Director", "🎵 Music", "📸 Photography", "✏ Sketch"].map((item) => (
    <div className="category-card" key={item}>
      {item}
    </div>
  ))}
</div>

      {/* ================= GRID ================= */}
     <div className="artist-grid">
  {(showFavorites ? favorites : filteredArtists).length > 0 ? (
    (showFavorites ? favorites : filteredArtists).map((artist) => (
      <ArtistCard
        key={artist.id}
        artist={artist}
        onClick={() => setSelectedArtist(artist)}
      />
    ))
  ) : (
    <p className="no-results">
      {showFavorites ? "No favorites yet ❤️" : "No artists found 😢"}
    </p>
  )}
</div>

      {/* ================= MODAL ================= */}
      {selectedArtist && (
        <div className="modal-overlay">
          <div className="artist-modal">
            <img
              src={selectedArtist.image}
              alt={selectedArtist.name}
              className="modal-image"
            />

            <h2>{selectedArtist.name}</h2>
            <p className="modal-category">{selectedArtist.category}</p>
            <p className="modal-about">{selectedArtist.about}</p>

            <div className="modal-actions">
              <button
                className={`favorite-action ${
                  favorites.find((f) => f.id === selectedArtist.id)
                    ? "added"
                    : ""
                }`}
                onClick={() => toggleFavorite(selectedArtist)}
              >
                {favorites.find((f) => f.id === selectedArtist.id)
                  ? "✔ Added to Favorites"
                  : "❤️ Add to Favorites"}
              </button>

              <button
                className="close-btn"
                onClick={() => setSelectedArtist(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

<footer className="footer">
  <p>© 2026 Creativa | Built by Latheef</p>
</footer>

export default App;