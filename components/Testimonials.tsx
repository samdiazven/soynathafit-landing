import Image, { StaticImageData } from "next/image";
import React from "react";
import before1 from "../assets/WEB-ANTESYDESPUES-18.jpg";
import after1 from "../assets/WEB-ANTESYDESPUES-19.jpg";
import before2 from "../assets/WEB-ANTESYDESPUES-20.jpg";
import after2 from "../assets/WEB-ANTESYDESPUES-21.jpg";
import before3 from "../assets/WEB-ANTESYDESPUES-22.jpg";
import after3 from "../assets/WEB-ANTESYDESPUES-23.jpg";

function Testimonial({
  images: { before, after },
}: {
  images: { before: StaticImageData; after: StaticImageData };
}) {
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
      <Testimonial images={{ after: after1, before: before1 }} />
      <Testimonial images={{ after: after2, before: before2 }} />
      <Testimonial images={{ after: after3, before: before3 }} />
    </section>
  );
}

export default Testimonials;
