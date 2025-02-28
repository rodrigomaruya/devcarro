"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/card";
import { StaticImageData } from "next/image";
import { carros } from "@/services/carros";

interface ListaCarroProps {
  image: StaticImageData;
  title: string;
  marca: string;
  ano: string;
  km: string;
  preco: string;
  shaken: string;
}

export function ListaCarros({
  modelo,
  marca,
}: {
  modelo: string | undefined;
  marca: string | undefined;
}) {
  const [listaCarros, setListaCarros] = useState<ListaCarroProps[]>(
    carros || []
  );

  useEffect(() => {
    if (modelo) {
      const findModelo = carros.filter((carro) =>
        carro.title.toLowerCase().startsWith(modelo.toLowerCase())
      );
      setListaCarros(findModelo);
    } else {
      setListaCarros(carros);
    }
  }, [modelo]);

  useEffect(() => {
    if (marca) {
      const findModelo = carros.filter((carro) =>
        carro.marca.toLowerCase().startsWith(marca.toLowerCase())
      );
      setListaCarros(findModelo);
    } else {
      setListaCarros(carros);
    }
  }, [marca]);

  return (
    <section className="w-full px-1">
      <p>
        Resultados encontrado:{" "}
        <span>
          {" "}
          <strong>{listaCarros.length}</strong> item encontrados
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
        {listaCarros.length === 0 ? (
          <p>Nenhum carro encontrado!</p>
        ) : (
          listaCarros.map((item, index) => <Card carros={item} key={index} />)
        )}
      </div>
    </section>
  );
}
