interface CharacterInfoProps {
  currentName: string;
  race: string;
  gender: string;
  currentKi: string;
  maxKi: string;
  affiliation: string;
}

export function CharacterInfo({
  currentName,
  race,
  gender,
  currentKi,
  maxKi,
  affiliation,
}: CharacterInfoProps) {
  const formatKiValue = (ki: string) => {
    if (ki === "unknown") return "Desconocido";
    const numericKi = parseInt(ki, 10);
    return isNaN(numericKi) ? "Desconocido" : numericKi.toLocaleString();
  };

  return (
    <div className="w-full md:w-3/5 p-6 flex flex-col">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {currentName}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {race} - {gender}
        </p>
      </div>

      <div className="flex flex-col space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Ki Base</p>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {formatKiValue(currentKi)}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Ki Total</p>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {formatKiValue(maxKi)}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Afiliación</p>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {affiliation}
          </span>
        </div>
      </div>
    </div>
  );
}
