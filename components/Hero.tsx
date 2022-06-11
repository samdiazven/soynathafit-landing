import Image from "next/image";
import React from "react";
import hero from "../assets/bannerweb.jpg";
import bag from "../assets/WEB-PNG-12.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-56 md:h-96 flex flex-col ">
      <Image src={hero} alt="Hero" layout="fill" priority />
      <figure className="absolute top-2 right-4 w-10 h-10 md:h-12 md:w-12 hover:cursor-pointer">
        <Link href="pagos">
          <Image
            src={bag}
            alt="bag"
            layout="intrinsic"
            className="absolute top-0 right-0"
          />
        </Link>
      </figure>
    </section>
  );
}

export default Hero;
