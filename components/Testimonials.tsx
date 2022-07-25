import Image, { StaticImageData } from "next/image";
import React from "react";
import image1 from "../assets/before1.png";
import image2 from "../assets/before2.png";
import image3 from "../assets/before3.png";

function Testimonials() {
  return (
    <section className="w-full bg-blue-500 flex flex-col md:flex-row items-center">
      <article className="py-2 flex justify-center items-center">
        <Image src={image1} alt="antes" objectFit="contain" />
      </article>
      <article className="py-2 flex justify-center items-center">
        <Image src={image2} alt="antes" objectFit="contain" />
      </article>
      <article className="py-2 flex justify-center items-center">
        <Image
          src={image3}
          alt="antes"
          objectFit="contain"
          className="self-center"
        />
      </article>
    </section>
  );
}

export default Testimonials;
