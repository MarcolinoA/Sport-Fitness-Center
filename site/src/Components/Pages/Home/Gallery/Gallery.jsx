import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryStyle.css";

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h1 className="h1-title">Gallery</h1>
      </div>
      <div className="carousel-images">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;