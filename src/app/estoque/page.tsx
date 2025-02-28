import { Container } from "@/components/container";
import { NavEstoque } from "./components/nav";
import { ListaCarros } from "./components/listaCarros";
import prius from "@/image/prius.jpg";
import fit from "@/image/honda-fit.jpg";
import aqua from "@/image/toyota-aqua.jpg";
import wagonR from "@/image/wagonR.jpg";
import lancer from "@/image/lancer.jpg";
import cx3 from "@/image/cx-3.jpg";
import move from "@/image/move.jpg";

export const carros = [
  {
    image: prius,
    title: "prius",
    marca: "toyota",
    ano: "2015",
    km: "70.000",
    preco: "500.000",
    shaken: "5",
  },
  {
    image: fit,
    title: "fit",
    marca: "honda",
    ano: "2011",
    km: "90.000",
    preco: "200.000",
    shaken: "5",
  },
  {
    image: aqua,
    title: "aqua",
    marca: "toyota",
    ano: "2018",
    km: "30.000",
    preco: "900.000",
    shaken: "5",
  },
  {
    image: wagonR,
    title: "wagon-R",
    marca: "suzuki",
    ano: "2018",
    km: "90.000",
    preco: "40.000",
    shaken: "5",
  },
  {
    image: cx3,
    title: "cx-3",
    marca: "mazda",
    ano: "2008",
    km: "90.000",
    preco: "550.000",
    shaken: "5",
  },
  {
    image: lancer,
    title: "lancer",
    marca: "mitsubishi",
    ano: "2010",
    km: "75.000",
    preco: "1.000.000",
    shaken: "5",
  },
  {
    image: move,
    title: "move",
    marca: "daihatsu",
    ano: "2020",
    km: "90.000",
    preco: "1.900.000",
    shaken: "5",
  },
];

export default async function Estoque({
  searchParams,
}: {
  searchParams?: Promise<{ modelo?: string; name?: string; marca?: string }>;
}) {
  const modelo = await (await searchParams)?.modelo;
  const marca = await (await searchParams)?.marca;
  return (
    <Container>
      <main className="min-h-svh">
        <h1 className="text-center mt-10 text-2xl font-bold">Estoque</h1>
        <p className="text-center mt-4">
          Aqui você encontra as melhores opções de carros novos, seminovos e
          usados do Japão.
        </p>
        <div className="flex flex-col md:flex-row mt-10">
          <NavEstoque nav={carros} />
          <ListaCarros modelo={modelo} marca={marca} />
        </div>
      </main>
    </Container>
  );
}
