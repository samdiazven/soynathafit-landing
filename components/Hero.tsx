import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import hero from "../assets/banner-img.jpg";

function Hero() {
  const navigate = useRouter();

  return (
    <section className="h-96 w-full flex flex-col relative ">
      <Image
        src={hero}
        layout="responsive"
        alt="Hero"
        priority
        height={"100%"}
        width={"100%"}
      />
      <button
        onClick={() => navigate.push("/pagos")}
        className="p-1 w-64 bg-[#023C49] text-xl font-extrabold -mt-12 z-50 mx-auto text-bold font-poppins text-slate-50 rounded-xl "
      >
        COMPRA AHORA
      </button>
    </section>
  );
}

export default Hero;
