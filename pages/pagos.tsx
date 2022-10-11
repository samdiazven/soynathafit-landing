import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";
import zelle from "../assets/zelle.png";
import paypal from "../assets/paypal.png";
import Link from "next/link";
import { AiFillCaretLeft } from "react-icons/ai";
import Head from "next/head";

type Service = "paypal" | "zelle";

export default function Pagos() {
  let [name, setName] = React.useState("");
  let [email, setEmail] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = {
      name,
      email,
    };
    if (Object.values(form).includes("")) {
      Swal.fire({
        title: "Revisa tus datos",
        text: "Todos los campos son obligatorios",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    let response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.status === 200) {
      Swal.fire({
        title: "¡Gracias!",
        text: "Te contactaremos a la brevedad, por favor mantente al tanto de la bandeja de tu correo.",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }

    setName("");
    setEmail("");
  }

  return (
    <>
      <Head>
        <title>Pagos - Reto Masivo</title>
      </Head>
      <main className=" min-h-screen">
        <Link href="/">
          <div className="flex items-center w-32 hover:text-blue-100 p-4 hover:cursor-pointer ">
            <AiFillCaretLeft />
            <span className="text-bold font-poppins text-md md:text-xl ">
              Volver
            </span>
          </div>
        </Link>
        <section className="max-w-5xl gap-4 mx-auto py-12 flex flex-col md:flex-row justify-between ">
          <div className="w-full md:w-1/2">
            <article className="px-4 w-full">
              <h2 className="font-poppins text-bold text-3xl ">
                Medios de pago
              </h2>
              <p className="indent-1 text-poppins text-sm md:text-lg ">
                Nuestros medios de pago son:
              </p>
              <div className="flex flex-col">
                <div className="flex items-center flex-row ">
                  <figure className="p-4">
                    <Image
                      src={zelle}
                      width={40}
                      height={40}
                      alt="zelle-image"
                    />
                  </figure>
                  <p className="flex-col flex">
                    <span className="font-poppins text-bold">
                      Nro. de Tel&eacute;fono: <em>407 985 9084</em>
                    </span>
                    <span className="font-poppins text-bold">
                      Titular: <em>Nathaly Diaz</em>
                    </span>
                  </p>
                </div>
                <div className="flex items-center flex-row ">
                  <figure className="p-4">
                    <Image
                      src={paypal}
                      width={40}
                      height={40}
                      alt="zelle-image"
                    />
                  </figure>
                  <p className="flex-col flex">
                    <span className="font-poppins text-bold">
                      <em>@retomasivo</em>
                    </span>

                    <span className="font-poppins text-bold">
                      Titular: <em>Nathaly D&iacute;az</em>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <form className="py-4 space-y-4" onSubmit={handleSubmit}>
            <h3 className=" text-center text-xl text-bold font-poppins">
              Ingresa los datos de tu pago
            </h3>
            <div className="flex items-center justify-center ">
              <label htmlFor="name" className="sr-only ">
                Nombres
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                placeholder="Ingresa tus nombres"
              />
            </div>
            <div className="flex items-center justify-center ">
              <label htmlFor="email" className="sr-only ">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="flex items-center justify-center ">
              <button
                type="submit"
                className="p-4 w-72 md:w-96 rounded-md bg-green-100 hover:bg-green-200 text-white text-bold text-xl uppercase sm:text-sm"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
