"use client";
import { motion } from "framer-motion";
import { BookCopy, BrainCircuit, Cpu, Handshake, PartyPopper, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <BookCopy color="#84cc16"/>,
    title: "Capacitação e Desenvolvimento",
    description:
      "Participe de treinamentos, workshops e imersões que aprimoram suas habilidades e conhecimentos em inovação, tecnologia e transformação digital.",
  },
  {
    icon:<PartyPopper color="#84cc16" />,
    title: "Eventos Exclusivos",
    description:
      "Aprenda, divirta-se e conecte-se com a comunidade, por meio de eventos exclusivos.",
  },
  {
    icon:<Handshake color="#84cc16" />,
    title: "Conexões Estratégicas",
    description:
      "Estabeleça parcerias valiosas com empresas, entidades municipais, poder público, instituições financeiras e de ensino, ampliando seu networking e oportunidades de negócios.",
  },
  {
    icon:<BrainCircuit color="#84cc16" />,
    title: "Metodologias Avançadas",
    description:
      "Utilizar metodologias inovadoras e práticas de benchmarking para acelerar o processo de inovação dentro de sua organização, mantendo-se competitivo no mercado.",
  },
  {
    icon:<ShieldCheck color="#84cc16" />,
    title: "Projetos de Impacto ",
    description:
      "Contribua e tenha voz ativa na criação e execução de projetos de inovação que fazem a diferença na nossa região",
  },
  {
    icon:<Cpu color="#84cc16" />,
    title: "Protagonismo na Inovação Local",
    description:
      "Seja um agente ativo na transformação e desenvolvimento de Araguari, contribuindo para projetos que moldam o futuro da cidade",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-black ">
          Porque o ReriValley ?
        </h2>
        <p className="text-center mb-8">Conecte-se, Colabore e Cresça.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border rounded-lg shadow-md p-6"
            >
              <div className="flex items-center">
                {feature.icon}
                <h3 className="text-xl ml-2 text-lime-500 font-semibold mb-2">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
