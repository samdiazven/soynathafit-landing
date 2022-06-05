import type { NextPage } from "next";
import Head from "next/head";
import Asks from "../components/Ask";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RETO MASIVO-Soynathafit</title>
      </Head>
      <main className="flex flex-col h-full">
        <Hero />
        <Counter />
        <Video />
        <Carousel />
        <Testimonials />
        <Asks />
        <Footer />
      </main>
    </>
  );
};

export default Home;
