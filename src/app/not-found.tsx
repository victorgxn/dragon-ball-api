import Image from "next/image";
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 px-4 py-20 text-white">
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <h1 className="mb-2 text-8xl font-extrabold tracking-tighter text-orange-500 md:text-9xl">
          404
        </h1>

        <div className="relative mb-6 h-32 w-32 md:h-40 md:w-40">
          <Image
            src="/esfera-dragonball.webp"
            alt="Dragon Ball"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          ¡Las esferas del dragón no pudieron encontrar esta página!
        </h2>

        <p className="mb-8 text-lg text-blue-200 md:text-xl">
          Parece que te has teletransportado a una dimensión desconocida. Ni
          siquiera Shenlong puede hacer aparecer la página que buscas.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition-all hover:bg-orange-600"
          >
            <Home className="h-5 w-5" />
            Volver al Inicio
          </Link>

          <Link
            href="/characters"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 bg-transparent px-6 py-3 font-bold text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
          >
            <Search className="h-5 w-5" />
            Buscar Personajes
          </Link>
        </div>

        <div className="mt-12 rounded-lg bg-blue-800/50 p-4 backdrop-blur-sm">
          <p className="italic text-blue-100">
            ¡Hey! No te rindas. Incluso yo me he perdido muchas veces, pero
            siempre encuentro mi camino de vuelta. ¡Tú también puedes hacerlo! —
            Goku
          </p>
        </div>
      </div>
    </div>
  );
}
