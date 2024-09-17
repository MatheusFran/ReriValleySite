// pages/index.js
import Head from 'next/head'
import { motion } from 'framer-motion'

// Componentes
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Nossa Empresa - Inovação e Excelência</title>
        <meta name="description" content="Landing page institucional da Nossa Empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

// components/Header.js
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <a className="text-2xl font-bold text-gray-800">Nossa Empresa</a>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#features"><a className="text-gray-800 hover:text-blue-600">Recursos</a></Link>
            <Link href="#about"><a className="text-gray-800 hover:text-blue-600">Sobre</a></Link>
            <Link href="#contact"><a className="text-gray-800 hover:text-blue-600">Contato</a></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

// components/Hero.js
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Inovação e Excelência
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Transformando ideias em soluções de sucesso
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Saiba Mais
        </motion.button>
      </div>
    </section>
  )
}

// components/Features.js
import { motion } from 'framer-motion'

const features = [
  { title: 'Inovação', description: 'Soluções de ponta para desafios complexos' },
  { title: 'Qualidade', description: 'Compromisso com a excelência em cada projeto' },
  { title: 'Sustentabilidade', description: 'Práticas responsáveis para um futuro melhor' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nossos Diferenciais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/About.js
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
            <p className="text-gray-600 mb-4">
              Nossa empresa é líder em soluções inovadoras, com uma trajetória de sucesso
              e comprometimento com a excelência. Trabalhamos incansavelmente para
              transformar desafios em oportunidades, impulsionando o crescimento de
              nossos clientes e parceiros.
            </p>
            <p className="text-gray-600">
              Com uma equipe altamente qualificada e tecnologia de ponta, estamos
              preparados para enfrentar os desafios do futuro e criar um impacto
              positivo no mundo dos negócios.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img src="/api/placeholder/600/400" alt="Sobre Nossa Empresa" className="rounded-lg shadow-md" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// components/Contact.js
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Entre em Contato</h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
            <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
            <textarea id="message" rows="4" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Enviar Mensagem
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Nossa Empresa</h3>
            <p className="mt-2">Inovação e Excelência desde 2024</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.