'use client'
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../components/piriquito.png";
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
    }, 500);

    return () => clearTimeout(timeout);
  }, [wordIndex]);

  return (
    <section className="bg-white text-white min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Coluna 1: Conteúdo */}
        <div className="md:w-1/2 text-center text-black md:text-left mb-12 md:mb-0">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg mb-4 max-w-2xl"
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
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
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
              className="bg-transparent border-2 border-lime-500 text-lime-500 font-bold py-3 px-8 rounded-full hover:bg-lime-500 hover:text-white transition duration-300"
            >
              Junte-se a Nós
            </motion.button>
          </motion.div>
        </div>

        {/* Coluna 2: Logo e elementos visuais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative"
        >
          <div className="relative w-96 h-96 mx-auto">
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-lime-300 opacity-50"
            ></motion.div>
            <motion.div
              animate={{
                rotate: -360,
                transition: { duration: 25, repeat: Infinity, ease: "linear" },
              }}
              className="absolute inset-8 rounded-full border-4 border-dashed border-lime-400 opacity-60"
            ></motion.div>
            <motion.div
              animate={{
                rotate: 180,
                transition: { duration: 30, repeat: Infinity, ease: "linear" },
              }}
              className="absolute inset-16 rounded-full border-4 border-dashed border-lime-500 opacity-70"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="ReRi Valley Logo"
                width={120}
                height={120}
                className="rounded-full  p-2"
              />
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-64 h-64 bg-lime-300 rounded-full filter blur-3xl opacity-30"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
