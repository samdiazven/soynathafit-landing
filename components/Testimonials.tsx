import Image from "next/image";
import React from "react";
import before from "../assets/WEB-PNG-13.png";
import after from "../assets/WEB-PNG-14.png";

function Testimonial() {
  return (
    <article className="flex flex-col max-w-md items-center my-4">
      <div className="flex items-center gap-2 md:gap-1">
        <figure>
          <Image src={before} alt="antes" />
        </figure>
        <figure>
          <Image src={after} alt="despues" />
        </figure>
      </div>
      <p className="text-poppins font-semibold  px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem
        voluptas sunt doloremque vel quis eius eos. Odio nisi quibusdam eos!
        Sunt exercitationem, error unde fuga voluptas eos temporibus voluptatum.
      </p>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 px-18 max-w-7xlxl items-center self-center">
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </section>
  );
}

export default Testimonials;
