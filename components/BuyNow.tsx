import React from "react";
import Image from "next/image";
import back from "../assets/back.png";
import { useRouter } from "next/router";

function BuyNow() {
  const navigate = useRouter();
  return (
    <section className="relative h-96 w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={back} alt="back" layout="fill" />
      <div className="bg-blue-700 flex flex-col items-center md:w-1/2 w-10/12 h-10/12 md:top-14 md:left-1/4 absolute top-14 left-8 rounded-lg p-4">
        <p className="p-2 text-center text-sm md:text-xl font-poppins text-bold text-slate-50">
          El Reto es un programa creado para ayudarte a alcanzar y sostener la
          pérdida de peso en el tiempo, junto a un equipo dedicado a acompañarte
          en este proceso de sanación interna y externa. Permitenos ayudarte a
          cambiar tu vida ¿Te animas?
        </p>
        <button
          onClick={() => navigate.push("/pagos")}
          className=" p-1 w-10/12 mt-2 text-bold font-poppins text-white text-lg font-extrabold rounded-xl bg-gradient-to-tr from-[#20D2DA] via-[#1899C3] to-[#0D2993]"
        >
          COMPRA AHORA
        </button>
      </div>
    </section>
  );
}

export default BuyNow;
