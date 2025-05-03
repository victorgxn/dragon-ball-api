import Image from "next/image";

export default function HeaderSection() {
  return (
    <div className="flex flex-col items-center justify-center mb-8 text-center">
      <div className="relative w-full max-w-md mb-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <Image
            src="/esfera-dragonball.webp"
            alt="Dragon Ball API"
            className="relative z-10 w-64 h-auto drop-shadow-lg"
            width={256}
            height={256}
            priority
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-500 drop-shadow-md">
        Explorador de Personajes
      </h1>
      <p className="mt-2 text-blue-700 dark:text-blue-300">
        Descubre todos los personajes del universo Dragon Ball
      </p>

      <div className="flex justify-center mt-4 space-x-2">
        {[1, 2, 3, 4, 5, 6, 7].map((star) => (
          <div
            key={star}
            className="w-6 h-6 bg-orange-400 rounded-full shadow-lg"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, #FFA500, #FF4500)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full text-xs font-bold text-orange-800">
              {star}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
