import Image from "next/image";
import { OriginPlanet } from "@/app/interfaces/simple-character";

interface PlanetInfoProps {
  planet: OriginPlanet;
}

export function PlanetInfo({ planet }: PlanetInfoProps) {
  return (
    <div className="mt-8 bg-white dark:bg-blue-950 rounded-3xl p-6 shadow-xl border-2 border-blue-100 dark:border-blue-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Planeta de origen: {planet.name}
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 h-[250px] rounded-2xl overflow-hidden">
          <Image
            src={planet.image || "/placeholder.svg"}
            alt={planet.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p
            className={`text-sm font-medium ${
              planet.isDestroyed
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            {planet.isDestroyed ? "Planeta destruido" : "Planeta activo"}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {planet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
