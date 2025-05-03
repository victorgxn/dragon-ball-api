import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-500 py-16 sm:py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/dragon-ball-aura-pattern.webp"
          alt="Energy Background"
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl sm:text-4xl font-extrabold md:text-5xl">
          ¿Listo para Comenzar tu Aventura?
        </h2>
        <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg">
          Explora el vasto universo de Dragon Ball y descubre todos los secretos
          de tus personajes favoritos. ¡Únete a miles de fans que ya disfrutan
          de nuestra aplicación!
        </p>
        <div className="flex justify-center px-4 sm:px-0">
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-white/90 w-full sm:w-auto"
          >
            <Link href="/characters">
              <Users className="mr-2 h-5 w-5" />
              Explorar Personajes
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
