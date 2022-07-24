import React from "react";

function Asks() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-4">
      <h2 className="uppercase font-poppins text-lg text-center font-bold  text-green-200">
        Qu&eacute; beneficios te trae <br />
        <span className="text-xl font-poppins">el reto masivo online?</span>
      </h2>
      <h3 className=" mt-2 text-blue-400 uppercase text-center font-poppins text-lg font-extrabold">
        nutrici&oacute;n
      </h3>
      <ul className="list-disc px-2 marker:text-blue-500">
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Planes de Alimentación Semanal</b> prescritos por nuestra
            Nutricionista, adaptados a los requerimientos calóricos necesarios
            para garantizar la pérdida de peso.
          </span>
        </li>
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Listas de Sustitutos</b> para que puedas adaptar cada plan a tu
            preferencia.
          </span>
        </li>
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Recetas Saludables</b> sencillas y deliciosas que despertarán el
            chef que hay en ti.
          </span>
        </li>
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Listas de Compras</b> porque queremos hacerte la vida sencilla y
            cuando vayas a comprar puedas hacerlo de manera eficiente.
          </span>
        </li>
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Consultas Diarias</b> durante una hora en nuestro grupo de
            Telegram para que puedas aclarar tus dudas directamente con la
            Nutri.
          </span>
        </li>
      </ul>
      <h3 className="text-blue-400 uppercase text-center font-poppins text-la font-extrabold mt-2">
        entrenamiento
      </h3>
      <ul className="list-disc px-2 marker:text-blue-500">
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Clases en Vivo</b> prescritos por nuestra Nutricionista,
            adaptados a los requerimientos calóricos necesarios para garantizar
            la pérdida de pesode Lunes a Viernes a través de Zoom donde
            entrenaremos de manera funcional nuestra fuerza y resistencia. Nos
            vamos a divertir mientras quemamos calorías.
          </span>
        </li>
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Clases Grabadas</b> de la sesión en vivo que se subirán al grupo,
            para que quienes no puedan participar a las clases de Zoom puedan
            disfrutarlas luego.
          </span>
        </li>
        <li className="px-2 mx-4 my-2">
          <span className="text-center font-poppins">
            <b>Recomendaciones de Suplementos</b> a través de una guía que te
            ayudará a lograr tus objetivos.
          </span>
        </li>
      </ul>
      <div className="w-10/12 md:w-1/2 mt-8 self-center mx-auto h-1/2 rounded-xl relative bg-[#21C4CB] p-8">
        <h4 className="bg-blue-400  font-extrabold left-0  absolute top-4 rounded-md md:w-1/3 w-1/2 text-right uppercase text-xl text-slate-50 font-poppins">
          hay m&aacute;s
        </h4>
        <div className="my-4">
          <p className="font-poppins text-slate-50 text-md my-2">
            <b>Charlas temáticas</b> para aprender a leer la tabla nutricional
            de los alimentos, cómo hacer una lista de compras, cómo hacer un
            meal prep, crear un vision board de tu objetivo y más.
          </p>
          <p className="font-poppins text-slate-50 text-md my-2">
            <b>Motivación diaria</b> por los grupos de telegram con videos,
            actividades y frases inspiracionales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Asks;
