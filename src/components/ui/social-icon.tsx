import type { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 text-white transition-colors hover:bg-yellow-500"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
