import React from "react";
import Image from "next/image";
import image from "../assets/desc.png";

export default function Carousel() {
  return (
    <section className="h-64 md:h-[800px] flex relative">
      <Image src={image} alt="carousel image." layout="fill" priority />
    </section>
  );
}
