import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import { searchImages } from './api/unsplash';
import { UnsplashImage } from './types/unsplash';

const App = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchTerm: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await searchImages(searchTerm);
      setImages(response.results);
    } catch (err) {
      setError('Failed to fetch images. Please check your API key and try again.');
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Unsplash Image Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && (
        <div style={{ 
          textAlign: 'center', 
          color: 'red', 
          padding: '20px',
          backgroundColor: '#ffebee',
          margin: '20px',
          borderRadius: '4px'
        }}>
          {error}
        </div>
      )}
      <ImageList images={images} loading={loading} />
    </div>
  );
};

export default App;
