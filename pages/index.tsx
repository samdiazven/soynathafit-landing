import type { NextPage } from "next";
import Head from "next/head";
import Asks from "../components/Ask";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";
import FacebookPixel from "../facebook/pixel-1";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RETO MASIVO-Soynathafit</title>
        <meta name="description" content="Soynathafit" />
        <meta
          name="facebook-domain-verification"
          content="tedwccl0q87g6b3p9g1nta4dboiztk"
        />
        <FacebookPixel />
      </Head>
      <main className="bg-gradient-to-br from-blue-200 via-blue-100 to-slate-50">
        <div className="flex max-w-6xl  m-auto flex-col h-full">
          <Hero />
          <Counter />
          <Video />
          <Carousel />
          <Testimonials />
          <Asks />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
