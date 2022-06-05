import React from "react";
import ReactPlayer from "react-player/youtube";
export default function Video() {
  let [isMounted, setIsMounted] = React.useState(false);
  let URL = "https://www.youtube.com/watch?v=sUwD3GRPJos";
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="flex mt-1 md:mt-4 p-4 w-full md:max-w-6xl self-center flex-col md:flex-row justify-center items-center gap-8">
      {isMounted && (
        <ReactPlayer
          width={2000}
          url={URL}
          style={{ maxWidth: "100%" }}
          controls
          stopOnUnmount
        />
      )}
      <p className="font-poppins text-sm font-semibold uppercase">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo adipisci
        nesciunt in deleniti perferendis error! Quidem dicta eveniet neque a
        harum, mollitia commodi aliquam vitae exercitationem beatae. Incidunt,
        cupiditate quo.
      </p>
    </section>
  );
}
