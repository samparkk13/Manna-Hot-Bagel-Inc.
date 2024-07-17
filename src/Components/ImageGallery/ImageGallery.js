import React, { useState, useEffect } from 'react';

const images = [
  'Images/fakebagel.jpeg', 
  'Images/mannaBagelStore.jpeg',
];

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const goToPrevious = () => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };
  
    const goToNext = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };
  
    return (
      <div className="image-gallery">
        <button className="left-arrow" onClick={goToPrevious}>&lt;</button>
        <img src={images[currentIndex]} alt="Gallery" className="gallery-image" />
        <button className="right-arrow" onClick={goToNext}>&gt;</button>
      </div>
    );
  }
  
  export default ImageGallery;