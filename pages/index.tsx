import type { NextPage } from "next";
import Head from "next/head";
import Asks from "./components/Asks";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RETO MASIVO-Soynathafit</title>
      </Head>
      <main className="flex flex-col h-full">
        <Hero />
        <Counter />
        <Testimonials />
        <Asks />
        <Footer />
      </main>
    </>
  );
};

export default Home;
