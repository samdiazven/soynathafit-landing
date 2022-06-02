import type { NextPage } from "next";
import Asks from "./components/Asks";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

const Home: NextPage = () => {
  return (
    <main className="bg-red-500">
      <Header />
      <Hero />
      <Counter />
      <Testimonials />
      <Asks />
      <Footer />
    </main>
  );
};

export default Home;
