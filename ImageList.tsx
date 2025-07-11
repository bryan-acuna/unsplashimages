import { UnsplashImage } from '../types/unsplash';

interface ImageListProps {
  images: UnsplashImage[];
  loading?: boolean;
}

const ImageList = ({ images, loading = false }: ImageListProps) => {
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  if (images.length === 0) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>No images found. Try searching for something!</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '16px',
      padding: '20px',
    }}>
      {images.map((image) => (
        <div key={image.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#f9f9f9',
        }}>
          <img
            src={image.urls.small}
            alt={image.alt_description || 'Image from Unsplash'}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <div style={{ padding: '12px' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
              Photo by {image.user.name}
            </p>
            {image.description && (
              <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>
                {image.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
