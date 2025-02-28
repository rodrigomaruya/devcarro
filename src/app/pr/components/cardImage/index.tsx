"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

interface CardImageProps {
  image: StaticImageData[];
}

export function CardImage({ image }: CardImageProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Para definir o estado inicial
  }, [emblaApi, onSelect]);

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="flex flex-col items-center w-full">
      {/* Container principal do carrossel */}
      <div className="relative w-full max-w-3xl">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {image.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] px-4 py-3 bg-gray-100 rounded-md relative h-[250px] md:h-[450px] w-full"
              >
                <Image
                  src={item}
                  alt={`Imagem ${index + 1}`}
                  priority={true}
                  className="object-cover rounded-md"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border shadow-lg"
          onClick={scrollPrev}
        >
          <ChevronLeft color="#000" size={40} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border shadow-lg"
          onClick={scrollNext}
        >
          <ChevronRight color="#000" size={40} />
        </button>
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center gap-2 mt-4 w-full max-w-3xl flex-wrap px-4">
        {image.map((src, index) => (
          <button
            key={index}
            className={`w-20 h-16 rounded-lg overflow-hidden transition-opacity ${
              selectedIndex === index
                ? "opacity-100 border-2 border-blue-500"
                : "opacity-50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <Image
              src={src}
              alt={`Miniatura ${index + 1}`}
              width={84}
              height={84}
              priority={true}
              quality={100}
              className="w-auto h-auto object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
