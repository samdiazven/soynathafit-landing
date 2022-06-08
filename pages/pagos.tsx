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
  let [lastname, setLastname] = React.useState("");
  let [movement, setMovement] = React.useState("");
  let [service, setService] = React.useState<Service>("zelle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = {
      name,
      email,
      lastname,
      movement,
      service,
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
    try {
      let response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      let json = await response.json();
      Swal.fire({
        title: "¡Gracias!",
        text: "Te contactaremos a la brevedad, por favor mantente al tanto de la bandeja de tu correo.",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } catch (e) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    } finally {
      setEmail("");
      setName("");
      setLastname("");
      setMovement("");
    }
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
                      Titular: <em>Andrea Aldea</em>
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
                      Titular: <em>Nathaly D&acute;az</em>
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
              <label htmlFor="lastname" className="sr-only">
                Apellidos
              </label>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                id="lastname"
                name="lastname"
                className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                placeholder="Ingresa tus apellidos"
              />
            </div>

            <div className="flex items-center justify-center ">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                placeholder="Ingresa tu correo electronico"
              />
            </div>
            <div className="flex items-center justify-center ">
              <label htmlFor="services" className="sr-only">
                Servicio
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value as Service)}
                name="services"
                className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                id="services"
                placeholder="Selecciona un servicio"
              >
                <option value="zelle">Zelle</option>
                <option value="paypal">Paypal</option>
              </select>
            </div>

            <div className="flex items-center justify-center ">
              <label htmlFor="movement" className="sr-only">
                Numero de movimiento
              </label>
              <textarea
                value={movement}
                onChange={(e) => setMovement(e.target.value)}
                id="movement"
                name="movement"
                className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                placeholder="Ingresa tu numero de movimiento"
              ></textarea>
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
