// components/HorizontalScrollCarousel.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "./rerivalley2.png";
import img2 from "./sebrae.png";
import img3 from "./sicoob.png";
import img4 from "./imepac.png";
import img5 from "./suaFabrica.png";
import img6 from "./japa.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,

  // Adicione mais imagens conforme necessário
];

const HorizontalScrollCarousel = () => {
  const [currentImages, setCurrentImages] = useState(images.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        newImages.shift(); // Remove a primeira imagem
        newImages.push(
          images[
            (images.indexOf(newImages[newImages.length - 1]) + 1) %
              images.length
          ]
        ); // Adiciona a próxima imagem
        return newImages;
      });
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="items-center justify-between p-10 overflow-hidden  py-12">
      <div className="relative justify-between">
        <AnimatePresence initial={false}>
          <motion.div className="flex space-x-4">
            {currentImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, x: index === 4 ? 200 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index === 0 ? -200 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Image
                  src={image}
                  alt={`Partner Logo ${index + 1}`}
                  width={200}
                  height={100}
                  objectFit="contain"
                  className="bg-white p-4 rounded-lg shadow-md h-[15vh] w-[220px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
