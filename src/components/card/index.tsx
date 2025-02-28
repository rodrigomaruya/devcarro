import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface CardPros {
  carros: CarrosProps;
  index?: number;
}

interface CarrosProps {
  title: string;
  image: StaticImageData;
  preco: string;
  ano: string;
  km: string;
  shaken: string;
}

export function Card({ carros, index }: CardPros) {
  return (
    <article
      key={index}
      className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-4 py-3 bg-gray-100 rounded-md"
    >
      <div className="select-none text-slate-700 mb-2">
        <h2 className="text-xl md:text-2xl mb-1">
          {carros.title.toLocaleUpperCase()}
        </h2>
        <div className="relative h-56 w-full">
          <Image
            src={carros.image}
            alt={carros.title}
            priority={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="rounded-md"
          />
        </div>
        <ul className="flex flex-col gap-1 mt-1">
          <li>
            Preço: <strong>&yen; {carros.preco}</strong>
          </li>
          <li>
            Ano: <strong>{carros.ano}</strong>
          </li>
          <li>
            KM: <strong>{carros.km}</strong>
          </li>
          <li>
            Shaken: <strong>{carros.shaken}</strong>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Link
          href={`/pr/${carros.title}`}
          className="bg-orange-600 font-bold p-2 rounded-md text-white w-full text-center hover:opacity-75"
        >
          Mais Detalhes
        </Link>
      </div>
    </article>
  );
}
