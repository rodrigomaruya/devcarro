"use client";

import { useState, ChangeEvent } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface NavProp {
  nav: ListaCarroProps[];
}

interface ListaCarroProps {
  image: StaticImageData;
  title: string;
  marca: string;
  ano: string;
  km: string;
  preco: string;
  shaken: string;
}

export function NavEstoque({ nav }: NavProp) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [carName, setCarName] = useState(searchParams.get("modelo") || "");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value;
    setCarName(newName);

    const params = new URLSearchParams(searchParams);
    if (newName) {
      params.set("modelo", newName);
    } else {
      params.delete("modelo");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  const toyota = nav.filter((item) => item.marca === "toyota");
  const honda = nav.filter((item) => item.marca === "honda");
  const mazda = nav.filter((item) => item.marca === "mazda");
  const daihatsu = nav.filter((item) => item.marca === "daihatsu");
  const suzuki = nav.filter((item) => item.marca === "suzuki");
  const mitsubishi = nav.filter((item) => item.marca === "mitsubishi");

  return (
    <section className="max-w-48 mr-10 mb-6 px-2">
      <h4 className="mb-4 font-bold text-xl">Pesquisar</h4>
      <input
        type="search"
        placeholder="Pesquisar"
        onChange={handleChange}
        value={carName}
        className="border py-2 px-2 rounded-md"
      />
      <div className="mt-4">
        <h4 className="font-bold text-xl">Marcas</h4>
        <ul className="flex flex-col mt-4 gap-3 text-base">
          <li>
            <span>
              <Link
                href={`/estoque`}
                className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
              >
                TODOS CARROS
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link
                href={`/estoque?marca=toyota`}
                className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
              >
                TOYOTA
              </Link>
            </span>
            <span>({toyota.length})</span>
          </li>
          <li>
            <Link
              href={`/estoque?marca=honda`}
              className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
            >
              HONDA
            </Link>
            <span>({honda.length})</span>
          </li>
          <li>
            <Link
              href={`/estoque?marca=mazda`}
              className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
            >
              MAZDA
            </Link>
            <span>({mazda.length})</span>
          </li>
          <li>
            <Link
              href={`/estoque?marca=daihatsu`}
              className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
            >
              DAIHATSU
            </Link>
            <span>({daihatsu.length})</span>
          </li>
          <li>
            <Link
              href={`/estoque?marca=suzuki`}
              className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
            >
              SUZUKI
            </Link>
            <span>({suzuki.length})</span>
          </li>
          <li>
            <Link
              href={`/estoque?marca=mitsubishi`}
              className="hover:bg-slate-400 p-2 rounded-md hover:text-white"
            >
              MITSUBISHI
            </Link>
            <span>({mitsubishi.length})</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
