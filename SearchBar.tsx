import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search for images..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
          border: '2px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
