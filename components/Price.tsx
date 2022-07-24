import React from "react";

function Price() {
  return (
    <section className="w-full -mt-10 z-50 h-64 bg-blue-300 flex flex-col md:flex-row items-center md:justify-around  px-2">
      <h2 className="text-4xl md:text-8xl font-poppins text-slate-50 font-extrabold mt-2">
        PRECIO
      </h2>
      <div className="ml-2 flex flex-col mt-2 md:mt-0 ">
        <p className="font-poppins mt-2 text-slate-50">
          <b>25/07 - 31/07: </b>
          <span>35$</span>
        </p>
        <p className="font-poppins mt-2 text-slate-50">
          <b>01/08 - 07/08: </b>
          <span>
            Promo &quot;RETA A UN AMIGO&quot; 2x70$ (Precio individual 40$)
          </span>
        </p>
        <p className="font-poppins mt-2 text-slate-50">
          <b>PREVENTA 1: </b>
          <span>08/08 - 14/08: 40$</span>
        </p>
        <p className="font-poppins mt-2 text-slate-50">
          <b>PREVENTA 2: </b>
          <span>15/08 - 21/08: 45$</span>
        </p>
        <p className="font-poppins mt-2 text-slate-50">
          <b>VENTA: </b>
          <span>22/08 - 25/08: 50$</span>
        </p>
      </div>
    </section>
  );
}

export default Price;
