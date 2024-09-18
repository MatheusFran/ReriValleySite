"use client";
import { motion } from "framer-motion";
import LayeredCarousel from "../components/Carrosel";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-lime-600 to-lime-500"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Sobre Nós</h2>
            <p className="text-white mb-4">
              O Rerivalley - Ecossistema Local de Inovação de Araguari-MG é um
              hub dinâmico dedicado à contribuição à inovação e ao
              desenvolvimento sustentável em nossa região. Atuamos na execução
              de planos de ação estratégicos para projetos inovadores,
              colaborando com, entidades municipais, poder público, instituições
              financeiras e de ensino de Araguari.
            </p>
            <p className="text-white mb-4">
              Promovemos a conexão entre os principais atores do ecossistema,
              capacitando empresas e líderes por meio de metodologias avançadas,
              benchmarking e imersões voltadas para acelerar a inovação aberta e
              a transformação digital de produtos e serviços, com foco na
              conscientização e capacitação de diferentes públicos e níveis,
              garantindo a formação de profissionais preparados para os desafios
              futuros. Nosso compromisso é criar um ambiente colaborativo onde
              ideias inovadoras possam gerar impacto positivo, conectando
              talentos, tecnologias e recursos, posicionando o Rerivalley como o
              epicentro da inovação em Araguari, impulsionando o desenvolvimento
              econômico e educacional de forma sustentável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative h-[500px]"
          >
            {/* Carrossel retangular (estilo celular) */}
            <motion.div
              className="absolute bottom-0 left-0 w-3/5 h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden z-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <LayeredCarousel />
            </motion.div>

            {/* Carrossel mais quadrado */}
            <motion.div
              className="absolute bottom-0 right-0 w-3/5 h-4/5 bg-white rounded-lg shadow-lg overflow-hidden z-20"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <LayeredCarousel />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
