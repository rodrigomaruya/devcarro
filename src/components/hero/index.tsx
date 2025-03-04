import Image from "next/image";
import Aspiration from "@/image/aspiration.jpg";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

export function Hero() {
  return (
    <section
      className="relative bg-center bg-cover h-[300px] md:h-[calc(100vh-80px)] flex items-center justify-center"
      style={{ backgroundImage: `url(${Aspiration.src})` }}
    >
      {/* Overlay para escurecer a imagem */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 max-w-7xl px-2 mx-auto h-full">
        <h1 className="text-white font-semibold text-center">
          Encontre o carro dos seus sonhos!
        </h1>
        <p className="text-white font-semibold text-center">
          Ofertas imperdíveis, condições especiais e a melhor seleção de
          veículos para você. Venha conhecer!
        </p>
        <div className="flex items-center justify-start">
          <Link
            href={"#"}
            className="flex items-center justify-center py-2 px-3 bg-[#F17C0E] rounded-md text-white font-bold gap-2 hover:opacity-75 transition-all"
          >
            <FaWhatsapp size={24} /> Ligue e faça um orçamento!
          </Link>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-start gap-3 mt-9">
          <p className="text-white font-bold">Redes Sociais:</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href={"#"}
              className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center"
            >
              <BsInstagram size={24} color="#fff" />
            </Link>
            <Link
              href={"#"}
              className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center"
            >
              <BsFacebook size={24} color="#fff" />
            </Link>
            <Link
              href={"#"}
              className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center"
            >
              <BsTiktok size={24} color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
