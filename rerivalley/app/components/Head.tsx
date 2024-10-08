// components/Header.js
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../components/rerivalley2.png";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-lime-600 to-lime-500  shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <Image src={logo} alt="Logo" className="w-[10vw]" />
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/About" className="text-gray-800 hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/Contact" className="text-gray-800 hover:text-blue-600">
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
