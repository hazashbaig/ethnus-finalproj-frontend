import React, { useState, useEffect } from 'react';
import NavbarBeforeLogin from '../components/NavbarBeforeLogin';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('http://localhost:5000/getArtists');
        if (response.ok) {
          const data = await response.json();
          setArtists(data);
        } else {
          throw new Error('Error fetching artists');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div>
        <NavbarBeforeLogin/>
      <h2>Artists</h2>
      <ul>
        
      </ul>
    </div>
  );
}

export default Artists;
