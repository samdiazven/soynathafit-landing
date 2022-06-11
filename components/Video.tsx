import React from "react";
import ReactPlayer from "react-player/youtube";
import Carousel from "./Carousel";
export default function Video() {
  let [isMounted, setIsMounted] = React.useState(false);
  let URL = "https://www.youtube.com/watch?v=sUwD3GRPJos";
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="flex mt-1 md:my-4 rounded-lg  w-full  self-center flex-col md:flex-row justify-center items-center ">
      {isMounted && (
        <ReactPlayer
          url={URL}
          width={"100%"}
          controls
          stopOnUnmount
          style={{ borderRadius: "0.5rem", maxWidth: "100%" }}
        />
      )}
    </section>
  );
}
