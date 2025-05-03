import Image from "next/image";
import Link from "next/link";

interface DragonBallCardProps {
  id: string;
  name: string;
  race: string;
  baseKi: string | number;
  totalKi: string | number;
  affiliation: string;
  imageUrl: string;
}

export default function CharacterCard({
  id,
  name,
  race,
  baseKi,
  totalKi,
  affiliation,
  imageUrl,
}: DragonBallCardProps) {
  const formatKiValue = (ki: string | number) => {
    if (ki === "unknown") return "Desconocido";
    const numericKi = typeof ki === "string" ? parseInt(ki, 10) : ki;
    return isNaN(numericKi) ? "Desconocido" : numericKi.toLocaleString();
  };

  return (
    <Link
      href={`/characters/${id}`}
      className="block transform transition-transform duration-300 hover:scale-105"
    >
      <div className="w-full max-w-sm overflow-hidden rounded-lg bg-gray-800 shadow-lg">
        <div className="relative h-96 w-full bg-gradient-to-br from-gray-200 to-gray-300">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              width={300}
              height={400}
              className="h-auto max-h-full w-auto object-contain"
              priority
            />
          </div>
        </div>
        <div className="p-6 text-white">
          <h2 className="mb-2 text-4xl font-bold text-white">{name}</h2>
          <p className="mb-4 text-xl font-semibold text-yellow-500">{race}</p>

          <div className="mb-2">
            <p className="text-lg text-white">Base KI:</p>
            <p className="text-2xl font-bold text-yellow-500">
              {formatKiValue(baseKi)}
            </p>
          </div>

          <div className="mb-2">
            <p className="text-lg text-white">Total KI:</p>
            <p className="text-2xl font-bold text-yellow-500">
              {formatKiValue(totalKi)}
            </p>
          </div>

          <div>
            <p className="text-lg text-white">Affiliation:</p>
            <p className="text-2xl font-bold text-yellow-500">{affiliation}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
