import { Container } from "../container";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import { FaOilCan } from "react-icons/fa";
import Link from "next/link";

export function MyServices() {
  return (
    <div className="bg-gray-200 w-full">
      <Container>
        <section
          className=" w-full flex flex-col items-center justify-center py-16"
          id="servicos"
        >
          <h1 className="text-slate-700 font-bold">Nossos Serviços</h1>

          <article className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:justify-between  w-full max-w-7xl px-2">
            <div className="flex flex-col items-center justify-start gap-2 text-slate-700 ">
              <div className="w-16 h-16 rounded-full bg-[#F17C0E] flex justify-center items-center">
                <IoNewspaperOutline size={30} color="#fff" />
              </div>
              <h2 className="text-slate-700 mb-3 font-semibold">
                Serviço de Shaken
              </h2>
              <ul className="flex flex-col gap-3 items-center justify-center">
                <li>
                  <strong>✅ Inspeção completa - </strong>Verificamos todos os
                  itens exigidos pela lei.
                </li>
                <li>
                  <strong>✅ Documentação – </strong> Cuidamos do processo
                  burocrático para sua tranquilidade.
                </li>
                <li>
                  <strong>✅ Reparos necessários –</strong>Caso precise de
                  ajustes, oferecemos soluções acessíveis.
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 text-slate-700 ">
              <div className="w-16 h-16 rounded-full bg-[#F17C0E] flex justify-center items-center">
                <FaCar size={30} color="#fff" />
              </div>
              <h2 className="text-slate-700 mb-3 font-semibold">
                Venda de carro
              </h2>
              <ul className="flex flex-col gap-3 items-center justify-center">
                <li>
                  <strong>✅ Venda de Veículos – </strong>Modelos novos e
                  seminovos com garantia e procedência.
                </li>
                <li>
                  <strong>✅ Financiamento e Consórcio</strong> Condições
                  especiais para facilitar sua compra.
                </li>
                <li>
                  <strong>✅ Avaliação e Troca –</strong>Avaliamos seu veículo
                  usado e oferecemos as melhores opções de troca.
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 text-slate-700">
              <div className="w-16 h-16 rounded-full bg-[#F17C0E] flex justify-center items-center">
                <FaOilCan size={30} color="#fff" />
              </div>
              <h2 className="text-slate-700 mb-3 font-semibold">
                Serviços de Mecânica
              </h2>
              <ul className="flex flex-col gap-3 items-center justify-center">
                <li>
                  <strong>✅ Revisão Completa – </strong>Checamos todos os itens
                  essenciais para sua segurança.
                </li>
                <li>
                  <strong>✅ Troca de Óleo e Filtros –</strong> Prolongue a vida
                  útil do motor.
                </li>
                <li>
                  <strong>✅ Freios e Suspensão –</strong>Inspeção e
                  substituição para uma condução segura.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </Container>
    </div>
  );
}
