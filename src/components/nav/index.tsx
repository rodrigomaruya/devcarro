import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";

import Link from "next/link";
export function Nav() {
  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"secondary"}>
            <FiMenu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="mt-9">
            <ul className="flex flex-col gap-4">
              <li>
                <SheetClose asChild>
                  <Link href={"/#"} className="text-lg hover:underline">
                    Home
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href={"/estoque"} className="text-lg hover:underline">
                    Estoque
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href={"/#servicos"} className="text-lg hover:underline">
                    Meus serviços
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href={"/contato"} className="text-lg hover:underline">
                    Contato
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
