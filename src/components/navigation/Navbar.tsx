"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavItem from "../ui/nav-item";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", label: "Inicio" },
    { href: "/characters", label: "Personajes" },
    { href: "/about", label: "Acerca de" },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-yellow-400 bg-white p-1 shadow-md">
            <Image
              src="/dragonball.webp"
              alt="Dragon Ball Logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
            Dragon <span className="text-yellow-300">Ball</span> Explorer
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex space-x-8">
            {navigationItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                }
              />
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            className="text-white hover:text-yellow-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 h-full w-72 bg-gradient-to-b from-orange-600 to-orange-500 p-6 transition-transform duration-300 shadow-2xl ${
          isMenuOpen ? "translate-x-0 z-50" : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-4 top-4 text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full p-1"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        >
          <X className="h-6 w-6" />
        </button>

        <nav aria-label="Navegación móvil">
          <ul className="flex flex-col space-y-6 pt-16">
            {navigationItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={closeMenu}
                isActive={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                }
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
