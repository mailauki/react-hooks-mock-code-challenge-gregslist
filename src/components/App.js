import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(deletedListing) {
    const updatedListings = listings.filter(listing => {
      if(listing.id !== deletedListing.id) return listing
    })
    console.log(deletedListing)
    setListings(updatedListings)
  }

  const listingsToDisplay = listings.filter(listing => {
    if(listing.description.toLowerCase().includes(search.toLowerCase())) 
    return listing
  })

  return (
    <div className="app">
      <Header onSearch={searchedValue => setSearch(searchedValue)} />
      <ListingsContainer listings={listingsToDisplay} onDeleteListing={handleDelete} />
    </div>
  );
}

export default App;
