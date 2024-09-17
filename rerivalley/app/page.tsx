"use client";
import Head from "next/head";
import Header from "./components/Head";
import Hero from "./Hero/page";
import About from "./About/page";
import Footer from "./Footer";
import Features from "./Features/page";
import Contact from "./Contact/page";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Head>
        <title>Nossa Empresa - Inovação e Excelênci a</title>
        <meta
          name="description"
          content="Landing page institucional da Nossa Empresa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
        <h1>Cases reais</h1>
        <h1>Como participar</h1>
      </main>

      <Footer />
    </div>
  );
}
