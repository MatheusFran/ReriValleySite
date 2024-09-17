"use client";
// components/Contact.js
import { motion } from "framer-motion";
import HorizontalScrollCarousel from "../components/HorizontalCarrosel";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-lime-500">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-left text-white mb-4">
          Uma Comunidade de Inovadores
        </h2>
        <p className="text-left text-black">
          Nosso ecossistema local é composto por líderes e mentes criativas que
          querem fazer a diferença.
        </p>
        <p>
          Desde Empreendedores Visionários até Estudantes e Pesquisadores,
          acreditamos que a colaboração é o caminho para o sucesso.
        </p>
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
}
