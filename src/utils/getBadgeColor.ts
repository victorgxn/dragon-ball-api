export function getBadgeColor(race: string) {
  const raceMap: Record<string, string> = {
    Saiyan:
      "bg-red-100/50 dark:bg-red-900/50 text-red-800 dark:text-red-300 border-red-300 dark:border-red-700",
    Human:
      "bg-green-100/50 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700",
    Namekian:
      "bg-green-100/50 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700",
    Android:
      "bg-purple-100/50 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-700",
    "Frieza Race":
      "bg-purple-100/50 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-700",
    Majin:
      "bg-pink-100/50 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300 border-pink-300 dark:border-pink-700",
    God: "bg-yellow-100/50 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700",
    Angel:
      "bg-blue-100/50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700",
  };

  return (
    raceMap[race] ||
    "bg-gray-100/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700"
  );
}
