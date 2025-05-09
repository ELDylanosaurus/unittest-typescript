export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(factorA: number, factorB: number): number {
  return factorA * factorB;
}

export function divide(divident: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division durch 0 ist nicht erlaubt");
  }
  return divident / divisor;
}
