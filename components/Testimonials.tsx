import Image, { StaticImageData } from "next/image";
import React from "react";
import image1 from "../assets/antes-despues.jpg";
import image2 from "../assets/antes-despues-1.jpg";
import image3 from "../assets/antes-despues-2.jpg";

function Testimonial({ image }: { image: StaticImageData }) {
  return (
    <article className="flex flex-col items-center">
      <Image
        className="rounded-lg"
        src={image}
        alt="antes"
        objectFit="contain"
        width={400}
        height={400}
      />
      <p className="text-poppins font-semibold px-4 mb-8 -mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem
        voluptas sunt doloremque vel quis eius eos. Odio nisi quibusdam eos!
        Sunt exercitationem, error unde fuga voluptas eos temporibus voluptatum.
      </p>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="grid md:gap-2 grid-cols-1 md:grid-cols-3  ">
      <Testimonial image={image1} />
      <Testimonial image={image2} />
      <Testimonial image={image3} />
    </section>
  );
}

export default Testimonials;
