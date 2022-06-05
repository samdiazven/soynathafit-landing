import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import tiktok from "../../assets/tiktok.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="max-w-xl self-center mt-8 py-4 flex flex-col">
      <Link href="pagos">
        <div className="bg-blue-100 p-2 rounded-lg px-4 hover:cursor-pointer">
          <p className="text-center text-xl uppercase font-bold font-poppins ">
            adquiere el reto aqu&iacute;!
          </p>
        </div>
      </Link>
      <div className="flex">
        <figure className="  hover:cursor-pointer">
          <Link href="https://wa.me/56988888888">
            <Image src={whatsapp} alt="whatsapp" />
          </Link>
        </figure>

        <figure className=" hover:cursor-pointer">
          <Link href="https://wa.me/56988888888">
            <Image src={facebook} alt="facebook" />
          </Link>
        </figure>
        <figure className=" hover:cursor-pointer">
          <Link href="https://wa.me/56988888888">
            <Image src={instagram} alt="instagram" />
          </Link>
        </figure>

        <figure className="hover:cursor-pointer">
          <Link href="https://wa.me/56988888888">
            <Image src={youtube} alt="youtube" />
          </Link>
        </figure>

        <figure className=" hover:cursor-pointer">
          <Link href="https://wa.me/56988888888">
            <Image src={tiktok} alt="tiktok" />
          </Link>
        </figure>
      </div>
      <div className="border-t-2 w-full mt-4">
        <p className="text-right text-sm font-semibold text-gray-400 mr-2 ">
          Desarrollado por Samuel D&iacute;az
        </p>
      </div>
    </footer>
  );
}

export default Footer;
