"use client";
import { Character } from "@/app/interfaces/simple-character";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CharacterImage } from "./character-image";
import { CharacterInfo } from "./character-info";
import { CharacterDescription } from "./character-description";
import { PlanetInfo } from "./planet-info";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [showTransformations, setShowTransformations] = useState(false);
  const [currentTransformation, setCurrentTransformation] = useState(0);

  const toggleTransformations = () => {
    setShowTransformations(!showTransformations);
    setCurrentTransformation(0);
  };

  const nextTransformation = () => {
    setCurrentTransformation((prev) =>
      prev === character.transformations.length - 1 ? 0 : prev + 1
    );
  };

  const prevTransformation = () => {
    setCurrentTransformation((prev) =>
      prev === 0 ? character.transformations.length - 1 : prev - 1
    );
  };

  const currentImage = showTransformations
    ? character.transformations[currentTransformation].image
    : character.image;

  const currentName = showTransformations
    ? character.transformations[currentTransformation].name
    : character.name;

  const currentKi = showTransformations
    ? character.transformations[currentTransformation].ki
    : character.ki;

  return (
    <div className="w-full transition-opacity duration-500 opacity-100">
      <div className="flex flex-col md:flex-row bg-white dark:bg-blue-950 rounded-3xl shadow-xl overflow-hidden border-2 border-blue-100 dark:border-blue-800">
        <CharacterImage
          currentImage={currentImage}
          currentName={currentName}
          showTransformations={showTransformations}
          transformationsCount={character.transformations.length}
          onPrevious={prevTransformation}
          onNext={nextTransformation}
        />

        <div className="flex flex-col flex-1">
          <CharacterInfo
            currentName={currentName}
            race={character.race}
            gender={character.gender}
            currentKi={currentKi}
            maxKi={character.maxKi}
            affiliation={character.affiliation}
          />

          {character.transformations.length > 0 && (
            <div className="px-6 pb-6 mt-auto">
              <Button
                onClick={toggleTransformations}
                variant="outline"
                className="w-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/50 border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 font-medium transition-all duration-200 hover:scale-[1.02]"
              >
                {showTransformations
                  ? "← Volver a forma base"
                  : "Ver transformaciones →"}
              </Button>
            </div>
          )}
        </div>
      </div>

      <CharacterDescription description={character.description} />
      <PlanetInfo planet={character.originPlanet} />
    </div>
  );
};

export default CharacterCard;
