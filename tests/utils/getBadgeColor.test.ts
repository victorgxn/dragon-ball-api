import { getBadgeColor } from "@/utils/getBadgeColor";

describe("getBadgeColor", () => {
  test("returns correct color classes for Saiyan race", () => {
    expect(getBadgeColor("Saiyan")).toBe(
      "bg-red-100/50 dark:bg-red-900/50 text-red-800 dark:text-red-300 border-red-300 dark:border-red-700"
    );
  });

  test("returns correct color classes for Human race", () => {
    expect(getBadgeColor("Human")).toBe(
      "bg-green-100/50 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700"
    );
  });

  test("returns correct color classes for God race", () => {
    expect(getBadgeColor("God")).toBe(
      "bg-yellow-100/50 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700"
    );
  });

  test("returns default gray color classes for unknown race", () => {
    expect(getBadgeColor("Unknown")).toBe(
      "bg-gray-100/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700"
    );
  });

  test("returns correct color classes for all defined races", () => {
    const races = [
      "Saiyan",
      "Human",
      "Namekian",
      "Android",
      "Frieza Race",
      "Majin",
      "God",
      "Angel",
    ];

    races.forEach((race) => {
      expect(getBadgeColor(race)).not.toBe(
        "bg-gray-100/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700"
      );
    });
  });
});
