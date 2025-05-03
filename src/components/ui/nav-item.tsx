import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  role?: string;
}

export default function NavItem({
  href,
  label,
  onClick,
  isActive = false,
  role,
}: NavItemProps) {
  return (
    <li role={role}>
      <Link
        href={href}
        className={`relative font-medium transition-colors ${
          isActive
            ? "text-yellow-300 after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-300"
            : "text-white hover:text-yellow-300 after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all hover:after:w-full"
        }`}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
