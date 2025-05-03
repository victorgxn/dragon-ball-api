import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link
        href={{ pathname: "/characters", query: { page: "1" } }}
        className={`inline-flex no-underline ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
        prefetch={false}
      >
        <Button variant="outline" disabled={currentPage === 1}>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      </Link>

      <Link
        href={{
          pathname: "/characters",
          query: { page: String(Math.max(1, currentPage - 1)) },
        }}
        className={`inline-flex no-underline ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
        prefetch={false}
      >
        <Button variant="outline" disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </Link>

      <div className="flex items-center px-4 text-sm text-gray-700 dark:text-gray-300">
        Página {currentPage} de {totalPages}
      </div>

      <Link
        href={{
          pathname: "/characters",
          query: {
            page: String(Math.min(totalPages, currentPage + 1)),
          },
        }}
        className={`inline-flex no-underline ${
          currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
        }`}
        prefetch={false}
      >
        <Button variant="outline" disabled={currentPage >= totalPages}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>

      <Link
        href={{
          pathname: "/characters",
          query: { page: String(totalPages) },
        }}
        className={`inline-flex no-underline ${
          currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
        }`}
        prefetch={false}
      >
        <Button variant="outline" disabled={currentPage >= totalPages}>
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
