import type { Metadata } from "next";
import {
  GithubIcon,
  Code2Icon,
  PaintbrushIcon,
  DatabaseIcon,
  LayoutIcon,
  SearchIcon,
  UsersIcon,
  MonitorSmartphoneIcon,
  FilterIcon,
  RefreshCwIcon,
  ContainerIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Dragon Ball API",
  description:
    "Información detallada sobre el proyecto Dragon Ball API, sus características y tecnologías utilizadas",
  keywords: [
    "Dragon Ball",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "API",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Sobre el Proyecto
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una aplicación web moderna que permite explorar el universo de
            Dragon Ball de una manera interactiva y visualmente atractiva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
            <div className="flex items-center mb-6">
              <Code2Icon className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Stack Tecnológico
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-sm">R</span>
                </div>
                <div>
                  <span className="font-medium">React & Next.js 14</span>
                  <p className="text-gray-600">
                    Framework frontend con Server Components y App Router
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-sm">T</span>
                </div>
                <div>
                  <span className="font-medium">TypeScript</span>
                  <p className="text-gray-600">
                    Tipado estático para mayor seguridad y mantenibilidad
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <PaintbrushIcon className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium">Tailwind CSS</span>
                  <p className="text-gray-600">
                    Estilos modernos y responsivos con utilidades
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <DatabaseIcon className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium">Dragon Ball API</span>
                  <p className="text-gray-600">
                    API REST para datos de personajes y transformaciones
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
            <div className="flex items-center mb-6">
              <LayoutIcon className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Características
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <SearchIcon className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <span className="font-medium">Búsqueda Avanzada</span>
                  <p className="text-gray-600">
                    Búsqueda en tiempo real de personajes por nombre
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <UsersIcon className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <span className="font-medium">Gestión de Personajes</span>
                  <p className="text-gray-600">
                    Vista detallada de personajes con transformaciones y
                    estadísticas
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MonitorSmartphoneIcon className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <span className="font-medium">Diseño Responsivo</span>
                  <p className="text-gray-600">
                    Interfaz adaptable a cualquier dispositivo
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <ContainerIcon className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <span className="font-medium">Dockerización</span>
                  <p className="text-gray-600">
                    Aplicación completamente containerizada para fácil
                    despliegue y escalabilidad
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <RefreshCwIcon className="w-8 h-8 mr-3" />
            Próximas Mejoras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FilterIcon className="w-6 h-6 mr-2" />
                Filtros Avanzados
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Filtrado por raza (Saiyan, Namekian, etc.)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Filtrado por género
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Filtrado por afiliación (Z Fighters, Villanos, etc.)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Combinación de múltiples filtros
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Optimización de Rendimiento
              </h3>
              <div className="space-y-4 text-white/90">
                <p>
                  Implementación de ISR (Incremental Static Regeneration) para:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Actualización automática de datos cada hora
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Mejor rendimiento y tiempo de carga
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Reducción de llamadas a la API
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/tu-usuario/dragon-ball-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <GithubIcon className="w-5 h-5 mr-2" />
            Ver código en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
