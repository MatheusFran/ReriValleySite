// components/LayeredCarousel.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const images = [img1, img2, img3];

const LayeredCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence initial={false}>
        {[0, 1, 2].map((offset) => {
          const index = (currentIndex + offset) % images.length;
          return (
            <motion.div
              key={`${images[index]}-${offset}`}
              className="absolute w-full h-full"
              initial={{
                x: offset === 0 ? "100%" : offset === 1 ? "0%" : "-100%",
                y: offset === 0 ? "0%" : offset === 1 ? "5%" : "10%",
                scale: offset === 0 ? 1 : offset === 1 ? 0.9 : 0.8,
                zIndex: 3 - offset,
              }}
              animate={{
                x: offset === 0 ? "0%" : offset === 1 ? "-100%" : "-200%",
                y: offset === 0 ? "0%" : offset === 1 ? "5%" : "10%",
                scale: offset === 0 ? 1 : offset === 1 ? 0.9 : 0.8,
                zIndex: 3 - offset,
              }}
              exit={{
                x: "200%",
                y: "15%",
                scale: 0.7,
                zIndex: 0,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={images[index]}
                  alt={`Carousel Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Image {index + 1}</h3>
                  <p>Description for Image {index + 1}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LayeredCarousel;
