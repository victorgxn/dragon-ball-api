import Image from "next/image";
import PowerLevelCard from "../ui/power-level-card";

const powerLevels = [
  {
    name: "Goku (Base)",
    level: "10,000",
    color: "bg-blue-600",
    percentage: 20,
  },
  {
    name: "Super Saiyajin",
    level: "150,000",
    color: "bg-yellow-500",
    percentage: 45,
  },
  {
    name: "Super Saiyajin 2",
    level: "470,000",
    color: "bg-yellow-400",
    percentage: 70,
  },
  {
    name: "Super Saiyajin 3",
    level: "1,200,000",
    color: "bg-yellow-300",
    percentage: 95,
  },
];

export function PowerLevelsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 py-16 sm:py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/dragon-ball-ki-pattern.webp"
          alt="Energy Background"
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-3 inline-block rounded-full bg-blue-700 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
            Estadísticas de Poder
          </div>
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-extrabold md:text-5xl">
            Niveles de <span className="text-yellow-400">Poder</span>{" "}
            Legendarios
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-blue-100">
            Compara los niveles de poder de las diferentes transformaciones y
            personajes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {powerLevels.map((level, index) => (
            <PowerLevelCard
              key={index}
              name={level.name}
              level={level.level}
              color={level.color}
              percentage={level.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
