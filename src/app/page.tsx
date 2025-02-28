import { Hero } from "@/components/hero";
import { MyServices } from "@/components/myServices";
import { MeusCarros } from "@/components/meusCarros";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />
      <MeusCarros />
      <MyServices />
    </main>
  );
}
