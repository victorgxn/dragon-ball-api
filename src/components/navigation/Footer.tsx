import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import SocialIcon from "../ui/social-icon";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 py-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-yellow-400 bg-white p-1">
              <Image
                src="/dragonball.webp"
                alt="Dragon Ball Logo"
                height={100}
                width={100}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">
              Dragon <span className="text-yellow-300">Ball</span> Explorer
            </span>
          </Link>
          <div className="flex space-x-4">
            <SocialIcon
              href="https://web.dragonball-api.com/"
              icon={<Facebook size={18} />}
              label="Dragon Ball API"
            />
            <SocialIcon
              href="https://web.dragonball-api.com/"
              icon={<Twitter size={18} />}
              label="Dragon Ball API"
            />
            <SocialIcon
              href="https://web.dragonball-api.com/"
              icon={<Instagram size={18} />}
              label="Dragon Ball API"
            />
            <SocialIcon
              href="https://web.dragonball-api.com/"
              icon={<Youtube size={18} />}
              label="Dragon Ball API"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
