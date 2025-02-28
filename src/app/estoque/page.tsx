import { Container } from "@/components/container";
import { NavEstoque } from "./components/nav";
import { ListaCarros } from "./components/listaCarros";
import { carros } from "@/services/carros";

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
