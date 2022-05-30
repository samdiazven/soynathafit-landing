import * as React from "react";

function Counter() {
  let [seconds, setSeconds] = React.useState(0);
  let [minutes, setMinutes] = React.useState(0);
  let [hours, setHours] = React.useState(0);
  let [days, setDays] = React.useState(0);

  let intervalDate = new Date("06/09/2022").getTime() - new Date().getTime();
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
      setSeconds(
        Math.floor((intervalDate % millisecondsOfMinute) / millisecondsOfSecond)
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
    <div
      style={{
        flexDirection: "row",
        display: "flex",
      }}
    >
      <p>days: {days}</p>
      <p>hours: {hours}</p>
      <p>minutes: {minutes}</p>
      <p>seconds: {seconds}</p>
    </div>
  );
}

export default Counter;
