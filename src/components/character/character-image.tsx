"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CharacterImageProps {
  currentImage: string;
  currentName: string;
  showTransformations: boolean;
  transformationsCount: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function CharacterImage({
  currentImage,
  currentName,
  showTransformations,
  transformationsCount,
  onPrevious,
  onNext,
}: CharacterImageProps) {
  return (
    <div className="relative w-full md:w-2/5 h-[400px] md:h-auto bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={currentName}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {showTransformations && transformationsCount > 1 && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-between p-6">
            <Button
              variant="ghost"
              size="icon"
              className="relative bg-black/20 hover:bg-black/40 text-white rounded-full shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative bg-black/20 hover:bg-black/40 text-white rounded-full shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110"
              onClick={onNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
