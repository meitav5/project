import React, { useState } from 'react';
import './CarSearch.css'

function CarSearch({filterCars}) {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');


  const handleSearch = (event) => {
    event.preventDefault();

    filterCars(minPrice == "" ? 0 : Number(minPrice), 
               maxPrice =="" ? 100000000000 : Number(maxPrice), location)
  }

  return (
    <div>
      <h2> Car Search </h2> 
      <form onSubmit={handleSearch}>
        <label>
          Location:
          <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <br />
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} />
        </label>
        <br />
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default CarSearch;
