import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CharactersShowcase() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Descubre todos los personajes
            </h2>
            <p className="text-gray-600 mb-8">
              Explora la increíble variedad de personajes que conforman el
              universo de Dragon Ball. Desde poderosos guerreros Saiyans hasta
              villanos temibles, cada uno con su propia historia y habilidades
              únicas.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Héroes - Los defensores de la Tierra y el universo
              </li>
              <li className="flex items-center text-gray-700">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Villanos - Los enemigos más temibles de la serie
              </li>
              <li className="flex items-center text-gray-700">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Dioses y Ángeles - Las entidades más poderosas del multiverso
              </li>
            </ul>
            <Link href="/characters">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Ver todos los personajes
              </Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/characters/gohan.webp"
                  alt="Gohan"
                  fill
                  className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative">
                <Image
                  src="/characters/cell.webp"
                  alt="Cell"
                  fill
                  className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative">
                <Image
                  src="/characters/freezer.webp"
                  alt="Freezer"
                  fill
                  className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative">
                <Image
                  src="/characters/vegeta.webp"
                  alt="Vegeta"
                  fill
                  className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
