import React from "react";
import Image from "next/image";
import image from "../assets/bannerweb-equipo-1-1080.jpg";

export default function Carousel() {
  return (
    <section className="h-80 md:h-96 flex relative">
      <Image
        className="rounded-lg"
        src={image}
        alt="carousel image."
        layout="fill"
        priority
      />
    </section>
  );
}
