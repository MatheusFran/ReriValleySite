// File: components/JoinForm.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Junte-se a Nós</h2>
      <form onSubmit={handleSubmit}>{/* Campos do formulário */}</form>
    </motion.section>
  );
}
