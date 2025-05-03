import { calculateKiPercentage } from "@/utils/power-level";

describe("calculateKiPercentage", () => {
  test("calculates correct percentage for valid numbers", () => {
    expect(calculateKiPercentage("50000", "100000")).toBe(50);
    expect(calculateKiPercentage("100000", "100000")).toBe(100);
    expect(calculateKiPercentage("25000", "100000")).toBe(25);
  });

  test("handles strings with non-numeric characters", () => {
    expect(calculateKiPercentage("50,000 Ki", "100,000 Ki")).toBe(50);
    expect(calculateKiPercentage("1M Ki", "2M Ki")).toBe(50);
  });

  test("caps percentage at 100", () => {
    expect(calculateKiPercentage("150000", "100000")).toBe(100);
    expect(calculateKiPercentage("200000", "100000")).toBe(100);
  });

  test("handles invalid or empty inputs", () => {
    expect(calculateKiPercentage("", "")).toBe(0);
    expect(calculateKiPercentage("invalid", "invalid")).toBe(0);
    expect(calculateKiPercentage("50000", "")).toBe(50);
  });
});
