import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { mediaByIndex } from "../utils/mediaIndex";
import { NextButton, PrevButton } from "./CarouselButtons";

export default function Carousel() {
  let SLIDES = Array.from(Array(4).keys());
  let [viewPort, embla] = useEmblaCarousel({ skipSnaps: false });
  let [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  let [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  let [isMounted, setIsMounted] = useState(false);

  let scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  let scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  let onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="embla">
      {isMounted && (
        <article className="embla__viewport" ref={viewPort}>
          <div className="embla__container">
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <figure className="embla__slide__inner">
                  <Image
                    src={mediaByIndex(index)}
                    alt="carousel image."
                    height={350}
                    width={window ? window.innerWidth : 1200}
                    layout="fixed"
                    objectFit="contain"
                  />
                </figure>
              </div>
            ))}
          </div>
        </article>
      )}
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </section>
  );
}
