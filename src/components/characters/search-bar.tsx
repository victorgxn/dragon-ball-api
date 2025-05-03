"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("name") || ""
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    const currentPage = params.get("page") || "1";

    params.delete("name");
    params.delete("page");
    params.set("page", currentPage);

    if (searchQuery.trim()) {
      params.set("name", searchQuery.trim());
    }

    startTransition(() => {
      router.push(`/characters?${params.toString()}`);
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams);
    const currentPage = params.get("page") || "1";

    params.delete("name");
    params.delete("page");
    params.set("page", currentPage);

    startTransition(() => {
      router.push(`/characters?${params.toString()}`);
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-blue-500 dark:text-blue-400">
            <Search className="w-5 h-5" />
          </div>

          <Input
            type="text"
            placeholder="Buscar personajes por nombre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 py-6 border-2 border-blue-200 dark:border-blue-700 focus:border-blue-400 dark:focus:border-blue-500 rounded-full shadow-md text-lg bg-white dark:bg-blue-950"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-16 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <Button
            type="submit"
            className="absolute right-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full px-4 h-10"
            disabled={isPending}
          >
            Buscar
          </Button>
        </div>
      </form>
    </div>
  );
}
