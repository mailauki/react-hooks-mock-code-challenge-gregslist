import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const {image, description, location, id} = listing

  const [isFavorited, setFavorited] = useState(false)
  // console.log(listing)
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={() => setFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
