import "./ArtistCard.css";

function ArtistCard({ artist, onClick }) {
  return (
    <div className="artist-card" onClick={onClick}>
      <img src={artist.image} alt={artist.name} />
      <div className="artist-overlay">
        <h3>{artist.name}</h3>
        <p>{artist.category}</p>
      </div>
    </div>
  );
}

export default ArtistCard;

