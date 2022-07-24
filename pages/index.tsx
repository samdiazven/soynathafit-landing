import type { NextPage } from "next";
import Head from "next/head";
import Asks from "../components/Ask";
import BuyNow from "../components/BuyNow";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Price from "../components/Price";
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
      <main className="bg-white">
        <div className="flex max-w-6xl  m-auto flex-col h-full">
          <Hero />
          <Counter />
          <Carousel />
          <Testimonials />
          <Asks />
          <Price />
          <BuyNow />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
