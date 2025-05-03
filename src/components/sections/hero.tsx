import Image from "next/image";
import Link from "next/link";
import { Users, Info } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-db-fight.webp"
          alt="Dragon Ball Hero"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] brightness-[0.6]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[500px] sm:min-h-[600px] flex-col items-start justify-center px-4 py-16 sm:py-20 text-white md:min-h-[700px]">
        <div className="max-w-2xl animate-fadeIn">
          <div className="mb-4 inline-block rounded-full bg-orange-600 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
            La aventura comienza aquí
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            Explora el Universo de{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Dragon Ball
            </span>
          </h1>
          <p className="mb-8 text-base sm:text-lg text-gray-200 md:text-xl">
            Descubre información detallada sobre tus personajes favoritos de
            Dragon Ball, sus transformaciones, poderes y mucho más en esta
            experiencia definitiva para fans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/characters"
              className="inline-flex items-center justify-center no-underline rounded-md text-sm font-medium transition-colors h-11 px-8 bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              Ver Personajes
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center no-underline rounded-md text-sm font-medium transition-colors h-11 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-full sm:w-auto"
            >
              <Info className="mr-2 h-5 w-5" />
              Acerca de
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
