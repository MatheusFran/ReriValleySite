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
            <h2 className="text-3xl font-bold text-white  mb-4">Sobre Nós</h2>
            <p className="text-white mb-4">
              O Rerivalley - Ecossistema Local de Inovação de Araguari-MG é um
              hub dinâmico dedicado à contribuição à inovação e ao
              desenvolvimento sustentável em nossa região. Atuamos na execução
              de planos de ação estratégicos para projetos inovadores,
              colaborando com, entidades municipais, poder público, instituições
              financeiras e de ensino de Araguari.
            </p>
            <p className="text-gray-600 mb-4">
              Promovemos a conexão entre os principais atores do ecossistema,
              capacitando empresas e líderes através de metodologias avançadas,
              benchmarking, e imersões focadas em acelerar a inovação aberta e a
              transformação digital de produtos e serviços. Além disso,
              entendemos que a educação é uma base para um mercado inovador e
              sustentável. Por isso, buscamos conscientizar e capacitar
              diferentes níveis e públicos, garantindo que o mercado local seja
              formado por profissionais treinados e preparados para os desafios
              do futuro.
            </p>
            <p className="text-gray-600">
              Nosso compromisso é criar um ambiente colaborativo onde ideias
              inovadoras possam florescer e gerar impacto positivo, conectando
              talentos, tecnologias e recursos. Dessa forma, o Rerivalley se
              torna o epicentro da inovação em Araguari, fomentando não apenas o
              desenvolvimento econômico, mas também a formação educacional que
              garante a longevidade e a sustentabilidade desse progresso.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <LayeredCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
