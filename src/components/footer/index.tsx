import { BsFillTelephoneFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full py-6 shadow-md bg-[#1D1D1D]">
      <footer className="max-w-7xl mx-auto px-2 flex flex-col">
        <h1 className="text-center md:text-4xl font-bold text-slate-50">
          Venha fazer uma visita!
        </h1>

        <article className="grid grid-cols-1 md:grid-cols-3 items-center w-full mt-6 max-w-5xl mx-auto gap-6">
          <div className="flex items-center gap-2 flex-1 ">
            <BsFillTelephoneFill size={24} color={"#F17C0E"} />
            <p className="text-slate-50">Tel: 0901234578</p>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <MdWatchLater size={20} color={"#F17C0E"} />
            <div className="flex flex-col">
              <p className="text-slate-50">Horário de atendimento</p>
              <p className="text-slate-50">
                9 às 19h (segundas, terças, quintas e sextas-feiras)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <FaMapMarkerAlt size={24} color={"#F17C0E"} />
            <p className="text-slate-50">Aichi-ken Nagoya-shi</p>
          </div>
        </article>
        <div className="flex items-center gap-3 mt-6 max-w-5xl mx-auto w-full">
          <p className="font-bold text-slate-50">Redes Sociais:</p>
          <div className="flex gap-3 ">
            <Link href={"#"} className="p-2 rounded-full bg-red-500">
              <BsInstagram size={20} color="#fff" />
            </Link>
            <Link href={"#"} className="p-2 rounded-full bg-red-500">
              <BsFacebook size={20} color="#fff" />
            </Link>
            <Link href={"#"} className="p-2 rounded-full bg-red-500">
              <BsTiktok size={20} color="#fff" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <p className="text-slate-50">
            &copy;{new Date().getFullYear()} DEV<strong>CARROS</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
