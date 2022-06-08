import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function Asks() {
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <section
      className="w-full bg-green-100 hover:border-green-200 hover:cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="flex  items-center p-4 ml-8 text-sm  md:text-xl text-white text-poppins font-bold uppercase">
        <span className="tracking-[.25em] md:tracking-[1em]">
          preguntas frecuentes
        </span>
        <span className="ml-4 ">
          {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </span>
      </p>
      {isOpen && (
        <div className="flex flex-col md:ml-6 items-center  justify-center max-w-6xl">
          <article className="px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              FIRST QUESTION
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit ipsa, libero saepe ducimus provident voluptates. Odit
              repudiandae doloremque commodi animi eum quam, expedita voluptas,
              voluptates similique perspiciatis corporis, sint explicabo?
            </p>
          </article>
          <article className="px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              SECOND QUESTION
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit ipsa, libero saepe ducimus provident voluptates. Odit
              repudiandae doloremque commodi animi eum quam, expedita voluptas,
              voluptates similique perspiciatis corporis, sint explicabo?
            </p>
          </article>
          <article className="px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              THIRD QUESTION
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit ipsa, libero saepe ducimus provident voluptates. Odit
              repudiandae doloremque commodi animi eum quam, expedita voluptas,
              voluptates similique perspiciatis corporis, sint explicabo?
            </p>
          </article>
        </div>
      )}
    </section>
  );
}

export default Asks;
