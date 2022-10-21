import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";
import zelle from "../assets/zelle.png";
import paypal from "../assets/paypal.png";
import Link from "next/link";
import { AiFillCaretLeft } from "react-icons/ai";
import Head from "next/head";
import CheckoutForm from "../components/CheckoutForm";

export default function Pagos() {

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
          <CheckoutForm />
        </section>
      </main>
    </>
  );
}
