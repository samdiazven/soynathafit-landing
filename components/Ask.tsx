import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function Asks() {
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <section
      className="w-full rounded-lg bg-green-100 hover:border-green-200 hover:cursor-pointer"
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
        <div className="flex flex-col md:ml-6  justify-center max-w-6xl">
          <article className="px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              ¿En el reto masivo pueden participar personas diagnosticadas con
              Diabetes?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Si, no se combinan carbohidratos completos, y en toda su
              totalidad se utilizan carbos de bajo-mediano índice glicémico. En
              tal caso de utilizar uno de alto índice sería en una cantidad
              reducida y con combinación de fibra.
            </p>
          </article>

          <article className="px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              ¿ Si deseo realizar únicamente el plan de alimentación sin hacer
              ejercicios interferirá en la pérdida de peso?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Todo va de la mano, 70% alimentación,30% actividad física. Sí
              habrá descenso de peso pero de una manera más lenta que el resto
              del grupo que sigue alimentación + rutinas de ejercicios
              diariamente.
            </p>
          </article>
          <article className="px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              ¿Los suplementos son obligatorios?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * No, preferiblemente se recomiendan suplementos con base a
              exámenes bioquímicos, químicos u otros aspectos. Pero hay
              suplementos que comúnmente se pueden recomendar.
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              ¿ Personas con gastritis, colón irritable, algún síntoma o
              patología digestiva pueden hacer el reto?
            </h5>
            <p className="text-gray-100 font-sans text-sm">
              * Si, se entregan recomendaciones específicas para ese tipo de
              personas referente a los alimentos que tiene que eliminar en su
              totalidad para evitar las molestias gástricas.
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="text-white font-bold font-poppins">
              ¿ El plan de alimentación es el mismo para todos los participantes
              del Reto Masivo?
            </h5>
            <p className="text-gray-100 font-sans text-sm">
              * Las preparaciones SI, pero las cantidades varían según el tipo
              de IMC ( índice de masa corporal) en el que se encuentre la
              persona
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              ¿ Cuáles quemadores de grasas recomendamos?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Ninguno.
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              ¿Las meriendas son obligatorias?, si ya estoy llen@, ¿ debo
              terminar el plato o la merienda?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * No, nada es obligado. Mientras te sientas saciado ya está bien
              así, si terminas obligad@ el plato puede que tengas ciertos
              síntomas como: fatiga, acidez, reflujo, etc.. Con la excepción de
              tener una cirugía bariátrica que su modo de alimentación es de
              cada 3-4 horas y, SI necesitan meriendas.
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              Si ya llevo tiempo siguiendo un ayuno intermitente y el plan no lo
              plantea, ¿qué hago?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Adaptar el Plan de Alimentación a tus horarios de ayuno.
              Recordando que debe ser vigilado por un profesional y variar la
              monotonía del ayuno
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              Por cuestiones del trabajo no logro llevar el plan en las horas
              indicadas.¿ Qué puedo hacer?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Básicamente adaptar el Plan de Alimentación a tu horario de
              trabajo o actividades extras. Los planes serán enviados todos los
              Viernes con recetario y lista de compras con la finalidad de
              organizar y adelantar preparaciones para cada semana.
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              ¿ Cual es la modalidad de entrenamiento?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Clases en vivo de martes a viernes via ZOOM, y también
              disponibles en la nube por 24h. Además todos los domingos enviamos
              5 videos cortos de entrenamiento para la semana
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              ¿ Necesito pesas o algún implemento para entrenar?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * No, si deseas agregar algún implemento ( mancuernas, bandas
              elásticas, ligas, balones, pelotas etc) puedes hacerlo pero no es
              obligatorio. para la semana
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              ¿ A qué hora son los entrenamientos?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * 7:15 am ( hora de Miami) para la semana
            </p>
          </article>
          <article className=" px-4 py-2">
            <h5 className="indent-1 text-white font-bold font-poppins">
              ¿ cómo nos comunicamos?
            </h5>
            <p className="indent-1 text-gray-100 font-sans text-sm">
              * Todos los días tenemos una hora de consulta a través de Telegram
              con el equipo para aclarar todas las dudas y mantener la
              motivación al tope para la semana
            </p>
          </article>
        </div>
      )}
    </section>
  );
}

export default Asks;
