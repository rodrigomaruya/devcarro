import { Container } from "@/components/container";
import prius from "@/image/prius.jpg";
import fit from "@/image/honda-fit.jpg";
import aqua from "@/image/toyota-aqua.jpg";
import wagonR from "@/image/wagonR.jpg";
import lancer from "@/image/lancer.jpg";
import cx3 from "@/image/cx-3.jpg";
import move from "@/image/move.jpg";
import interno1 from "@/image/interno/interno1.jpg";
import interno2 from "@/image/interno/interno2.jpg";
import interno3 from "@/image/interno/interno3.jpg";
import interno4 from "@/image/interno/interno4.jpg";
import interno5 from "@/image/interno/interno5.jpg";
import { CardImage } from "../components/cardImage";
import { FaArrowAltCircleLeft, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default async function Pr({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const carros = [
    {
      image: [prius, interno1, interno2, interno3, interno4, interno5],
      title: "prius",
      marca: "toyota",
      ano: "2015",
      km: "70.000",
      preco: "500.000",
      shaken: "5",
    },
    {
      image: [fit, interno1, interno2, interno3, interno4, interno5],
      title: "fit",
      marca: "honda",
      ano: "2011",
      km: "90.000",
      preco: "200.000",
      shaken: "5",
    },
    {
      image: [aqua, interno1, interno2, interno3, interno4, interno5],
      title: "aqua",
      marca: "toyota",
      ano: "2018",
      km: "30.000",
      preco: "900.000",
      shaken: "5",
    },
    {
      image: [wagonR, interno1, interno2, interno3, interno4, interno5],
      title: "wagon-R",
      marca: "suzuki",
      ano: "2018",
      km: "90.000",
      preco: "40.000",
      shaken: "5",
    },
    {
      image: [cx3, interno1, interno2, interno3, interno4, interno5],
      title: "cx-3",
      marca: "mazda",
      ano: "2008",
      km: "90.000",
      preco: "550.000",
      shaken: "5",
    },
    {
      image: [lancer, interno1, interno2, interno3, interno4, interno5],
      title: "lancer",
      marca: "mitsubishi",
      ano: "2010",
      km: "75.000",
      preco: "1.000.000",
      shaken: "5",
    },
    {
      image: [move, interno1, interno2, interno3, interno4, interno5],
      title: "move",
      marca: "daihatsu",
      ano: "2020",
      km: "90.000",
      preco: "1.900.000",
      shaken: "5",
    },
  ];

  const resolvedParams = await params;
  const { title } = resolvedParams;

  const find = carros.find((item) => item.title === title[0]);

  return (
    <Container>
      <main className="flex justify-center w-full min-h-svh text-center py-20 md:py-28 ">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full px-2">
            {find ? (
              <CardImage image={find?.image} />
            ) : (
              <p>Carro não encontrado!</p>
            )}
          </div>

          <div className="flex flex-col w-full md:max-w-96 mt-10 md:mt-0 px-4 items-center justify-center md:justify-start">
            <h1>{find?.title.toUpperCase()}</h1>
            <div className="h-1 w-full border-2 shadow-sm"></div>
            <ul className="mt-4 text-2xl flex flex-col gap-2">
              <li>Preço: &yen; {find?.preco}</li>
              <li>Ano: {find?.ano}</li>
              <li>KM: {find?.km}</li>
              <li>Shaken: {find?.shaken}</li>
            </ul>
            <Link
              href={"#"}
              className="flex items-center justify-center mt-6 bg-orange-500 py-2 px-3 rounded-md text-white font-bold gap-2 hover:opacity-75"
            >
              <FaWhatsapp />
              Fale com um representante
            </Link>
            <div className="pt-11">
              <Link href={"/estoque"} className="flex items-center gap-2">
                <FaArrowAltCircleLeft size={24} /> Voltar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
