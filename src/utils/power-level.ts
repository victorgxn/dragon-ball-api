export function calculateKiPercentage(
  currentKi: string,
  maxKi: string
): number {
  const currentKiValue = Number.parseInt(currentKi.replace(/\D/g, "") || "0");
  const maxKiValue = Number.parseInt(maxKi.replace(/\D/g, "") || "100000");
  return Math.min((currentKiValue / maxKiValue) * 100, 100);
}
