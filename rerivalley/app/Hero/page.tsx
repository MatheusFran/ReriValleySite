// components/Hero.js
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../components/rerivalley.png";
import { ChevronDown } from "lucide-react";
import Header from "../components/Head";

const words = [
  "Inovação",
  "Empreendedorismo",
  "Tecnologia",
  "Conexão",
  "Relacionamentos",
  "Crescimento",
  "Oportunidades",
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentWord(words[wordIndex]);
    }, 500); // Delay to allow for "erasing" animation

    return () => clearTimeout(timeout);
  }, [wordIndex]);

  return (
    <section className="bg-white text-white h-[80vh] py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Coluna 2: Conteúdo */}
        <div className="md:w-1/2 text-center text-black md:text-left">
          {/* <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          >
            <Image
              src={logo}
              alt="ReRi Valley Logo"
              width={200}
              height={200}
              className="rounded-full bg-white p-2"
            />
          </motion.div> */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text max-w-2xl"
          >
            Somos o Ecossistema local de Inovação de Araguari.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Promovendo{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block font-bold text-lime-500"
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg mb-8 max-w-2xl"
          >
            Conecte-se com inovadores, empresas e talentos que estão moldando o
            futuro da nossa região.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-left gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-500 text-white font-bold py-3 px-8 rounded-full hover:bg-black transition duration-300"
            >
              Explore o Ecossistema
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-500 border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white-600 transition duration-300"
            >
              Junte-se a Nós
            </motion.button>
          </motion.div>
        </div>
        {/* Coluna 1: Logo */}
        <div>
          <h1 className="text-black">lado direito</h1>
        </div>
      </div>
    </section>
  );
}
