import React, { useState } from 'react';
import { fetchRandomImage } from './api';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const image = await fetchRandomImage();
      setImage(image);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="app-container">
      <h1 className="title">Random Nature Image Generator</h1>
      {image && (
        <div className="image-container">
          <img src={image.webformatURL} alt={image.tags} />
        </div>
      )}
      <button type="button" onClick={handleSearch} disabled={isLoading}>
        Generate Image
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
