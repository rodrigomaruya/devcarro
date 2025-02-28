import Link from "next/link";
import { Nav } from "../nav";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-20 flex items-center shadow-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-5 px-2">
        <h1 className="">
          <Link
            href={"/"}
            className="font-bold text-slate-700 text-2xl md:text-3xl"
          >
            DEV<strong className="text-orange-500">CARROS</strong>
          </Link>
        </h1>

        <Nav />
      </div>
    </header>
  );
}
