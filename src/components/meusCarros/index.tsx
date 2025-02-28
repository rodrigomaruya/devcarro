"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/card";
import { carros } from "@/services/carros";
import { Container } from "../container";
import Link from "next/link";

export function MeusCarros() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px )": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }
  return (
    <Container>
      <section
        className=" w-full flex items-center justify-center flex-col gap-3 py-16"
        id="meuscarros"
      >
        <Link
          href={"/estoque"}
          className="text-center text-slate-700 font-bold text-xl md:text-2xl hover:opacity-70"
        >
          Veja nosso estoque
        </Link>

        <div className="h-full w-full">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-3 p-2">
                {carros.map((item, index) => (
                  <Card carros={item} key={index} />
                ))}
              </div>
            </div>
            <button className="absolute left-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 p-1 rounded-full border-2 shadow-lg bg-white">
              <ChevronLeft
                onClick={() => scrollPrev()}
                color="#000"
                size={40}
              />
            </button>
            <button className="absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 p-1 rounded-full border-2 shadow-lg bg-white">
              <ChevronRight
                onClick={() => scrollNext()}
                color="#000"
                size={40}
              />
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
