import React, { useState, useEffect } from 'react';

const images = [
  'Images/front.jpg',
  'Images/bagels.jpg',
  'Images/preBagel2.jpg',
  'Images/hotFood.jpg',
  'Images/page1.jpg',
  'Images/page2.jpg',
  'Images/page3.jpg',
  'Images/sideStore.jpg',
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-gallery">
      <button className="left-arrow" onClick={goToPrevious}>&lt;</button>
      <img src={images[currentIndex]} alt="Gallery" className="gallery-image" />
      <button className="right-arrow" onClick={goToNext}>&gt;</button>

      <div className="image-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
