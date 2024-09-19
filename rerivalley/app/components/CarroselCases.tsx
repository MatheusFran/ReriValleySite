// components/TestimonialsCarousel.js

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "This service is amazing! My life has changed for the better.",
    job: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "I couldn't be more satisfied with the quality and support!",
    job: "Marketing Manager",
  },
  {
    id: 3,
    name: "Sam Wilson",
    comment: "The best experience I've ever had. Highly recommend to everyone!",
    job: "Product Designer",
  },
  {
    id: 4,
    name: "Sara Johnson",
    comment: "Top-notch service with exceptional quality.",
    job: "Data Scientist",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
      );
    }, 2000);
    interval;
  }, []);

  return (
    <div className="w-full mx-auto py-10 px-5">
      <div className="relative">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Display 1 or 2 testimonials depending on screen size */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">
                {testimonials[currentIndex].comment}
              </p>
              <p className="text-sm mt-2 text-gray-600">
                - {testimonials[currentIndex].name},{" "}
                {testimonials[currentIndex].job}
              </p>
            </div>
            {testimonials[currentIndex + 1] && (
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-medium">
                  {testimonials[currentIndex + 1].comment}
                </p>
                <p className="text-sm mt-2 text-gray-600">
                  - {testimonials[currentIndex + 1].name},{" "}
                  {testimonials[currentIndex + 1].job}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
