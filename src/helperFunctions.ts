export const calc = (...dimensions: number[]): number => {
  return dimensions.reduce((prev, curr) => prev + curr, 0)
}

const gcd = (a: number, b: number): number => {
  return b < 0.0000001 ? a : gcd(b, Math.floor(a % b))
}

export const createFraction = (fraction: number) => {
  const len = fraction.toString().length - 2;
  const denominator = Math.pow(10, len);
  const numerator = fraction * denominator;
  const divisor = gcd(numerator, denominator);
  const finalNumerator = Math.floor(numerator / divisor)
  const finalDenominator = Math.floor(denominator / divisor)

  const diff = finalNumerator - finalDenominator
  const top = diff > 0 ? finalNumerator % finalDenominator : finalNumerator
  const wholeNumber = diff > 0 ? Math.floor(finalNumerator / finalDenominator) : 0

  return {
    top,
    bottom: finalDenominator,
    wholeNumber
  }
}