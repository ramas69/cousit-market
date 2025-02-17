export function useProductCalculations() {
  const calculateTotalValue = (
    width: number,
    length: number,
    pricePerMeter: number,
    unit: 'cm' | 'm'
  ) => {
    const surfaceInSquareMeters = (width * length) / (unit === 'cm' ? 10000 : 1)
    return surfaceInSquareMeters * pricePerMeter
  }

  return { calculateTotalValue }
} 