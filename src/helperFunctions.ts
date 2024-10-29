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

export const parseFloatFromFractionString = (fractionString: string): number => {
  const [whole, fraction] = fractionString.split(" ")
  if (!fraction) return parseFloat(whole)
  const [nominator, denominator] = fraction.split("/")
  return parseFloat(whole) + parseFloat(nominator) / parseFloat(denominator)
}

export const blobToFile = (blob: Blob, fileName: string) => {
  const b: Blob & { lastModifiedDate?: Date; name?: string } = blob;
  b.lastModifiedDate = new Date();
  b.name = fileName;

  return b as File;
};

export const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
};

export const downloadFile = (file: File) => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.download = file.name;
  link.href = url;
  link.click();
}