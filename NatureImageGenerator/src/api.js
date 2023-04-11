import axios from 'axios';

const API_KEY = '35282033-4a8584a3ed7d2dac327118673'; // Replace with your own API key

export async function fetchRandomImage() {
    const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&category=transportation&per_page=100`
    );
    const images = response.data.hits;
  
    // Return a random image from the search results
    return images[Math.floor(Math.random() * images.length)];
  }