import Image, { StaticImageData } from "next/image";
import React from "react";
import image1 from "../assets/before1.png";
import image2 from "../assets/before2.png";
import image3 from "../assets/before3.png";

function Testimonial({ image }: { image: StaticImageData }) {
  return (
    <article className=" py-2 self-center">
      <Image
        className="rounded-lg"
        src={image}
        alt="antes"
        objectFit="contain"
        width={400}
        height={400}
      />
    </article>
  );
}

function Testimonials() {
  return (
    <section className="grid md:gap-2 grid-cols-2 gap-1 place-items-center md:grid-cols-3  bg-blue-500 ">
      <Testimonial image={image1} />
      <Testimonial image={image2} />
      <Testimonial image={image3} />
    </section>
  );
}

export default Testimonials;
