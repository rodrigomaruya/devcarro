import Image from "next/image";
import Aspiration from "@/image/aspiration.jpg";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

export function Hero() {
  return (
    <section className="relative ">
      <div className="relative h-[360px] md:h-[calc(100vh-80px)] bg-black">
        <Image
          src={Aspiration}
          alt="hero"
          quality={100}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 top-24 md:top-1/3 flex flex-col gap-2 max-w-7xl px-2 mx-auto">
        <h1 className="text-white font-semibold text-left">
          Encontre o carro dos seus sonhos!
        </h1>
        <p className="text-white font-semibold text-left">
          Ofertas imperdíveis, condições especiais e a melhor seleção de
          veículos para você. Venha conhecer!
        </p>
        <div className="flex items-center justify-start">
          <Link
            href={"#"}
            className="flex items-center justify-center py-2 px-3 bg-[#F17C0E] rounded-md text-white font-bold gap-2 hover:opacity-75 transition-all"
          >
            <FaWhatsapp size={30} /> Ligue e faça um orçamento!
          </Link>
        </div>
      </div>
      <div className="w-full  absolute bottom-1.5 px-2">
        <div className="max-w-7xl mx-auto flex items-center justify-start gap-3">
          <p className="text-white font-bold">Redes Sociais:</p>
          <div className="flex gap-3 ">
            <Link href={"#"} className="p-2 rounded-full bg-red-500">
              <BsInstagram size={24} color="#fff" />
            </Link>
            <Link href={"#"} className="p-2 rounded-full bg-red-500">
              <BsFacebook size={24} color="#fff" />
            </Link>
            <Link href={"#"} className="p-2 rounded-full bg-red-500">
              <BsTiktok size={24} color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
