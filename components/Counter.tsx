import * as React from "react";

function Counter() {
  let [minutes, setMinutes] = React.useState(0);
  let [hours, setHours] = React.useState(0);
  let [days, setDays] = React.useState(0);

  let intervalDate = new Date("06/30/2022").getTime() - new Date().getTime();
  let millisecondsOfSecond = 1000;
  let millisecondsOfMinute = millisecondsOfSecond * 60;
  let millisecondsOfHour = millisecondsOfMinute * 60;
  let millisecondsOfDay = millisecondsOfHour * 24;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDays(Math.floor(intervalDate / millisecondsOfDay));
      setHours(
        Math.floor((intervalDate % millisecondsOfDay) / millisecondsOfHour)
      );
      setMinutes(
        Math.floor((intervalDate % millisecondsOfHour) / millisecondsOfMinute)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [
    intervalDate,
    millisecondsOfDay,
    millisecondsOfHour,
    millisecondsOfMinute,
    millisecondsOfSecond,
  ]);
  return (
    <section className="bg-blue-200 -mt-12 z-50 rounded-br-3xl rounded-bl-3xl">
      <article className="h-4 md:h-8 bg-green-200">
        <h3 className="text-center text-xs md:text-2xl font-poppins text-bold uppercase text-white">
          Fecha de inicio del reto masivo: 30 de junio de 2022
        </h3>
      </article>
      <article className="flex gap-8 p-2 items-center justify-center">
        <p className="flex flex-col">
          <span className="font-poppins font-bold text-5xl md:text-6xl text-white">
            {days}
          </span>
          <span className=" uppercase text-center font-poppins text-sm text-white ml-1 md:ml-2">
            {days === 1 ? "día" : "días"}
          </span>
        </p>
        <span className=" animate-pulse duration-1000 text-5xl mb-8 text-white text-bold md:text-7xl">
          :
        </span>
        <p className="flex flex-col">
          <span className="font-poppins uppercase text-center font-bold text-5xl md:text-6xl text-white">
            {hours}
          </span>
          <span className="font-poppins text-sm text-center text-white ml-1 md:ml-2">
            {hours === 1 ? "hora" : "horas"}
          </span>
        </p>
        <span className="animate-pulse duration-1000 tex-center text-5xl mb-8 text-white text-bold md:text-7xl">
          :
        </span>
        <p className="flex flex-col">
          <span className="font-poppins font-bold uppercase text-5xl md:text-6xl text-white">
            {minutes}
          </span>
          <span className="font-poppins text-sm text-center text-white ml-1 md:ml-2">
            {minutes === 1 ? "minuto" : "minutos"}
          </span>
        </p>
      </article>
    </section>
  );
}

export default Counter;
