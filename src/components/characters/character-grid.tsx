import { CharacterBasic } from "@/app/interfaces/characters-response";
import { CharacterCard } from ".";

interface CharacterGridProps {
  characters: CharacterBasic[];
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
        {characters.map((character: CharacterBasic) => (
          <div key={character.id} className="mx-auto w-full max-w-sm">
            <CharacterCard
              id={character.id.toString()}
              name={character.name}
              race={character.race}
              baseKi={character.ki}
              totalKi={character.maxKi || (Number(character.ki) * 2).toString()}
              affiliation={character.affiliation}
              imageUrl={character.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
