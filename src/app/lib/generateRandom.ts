// Simple testable function
export default function generateRandom(rangeStart: number, rangeEnd: number): number {
  const rangeSize = rangeEnd - rangeStart;
  const randomRange = Math.floor(Math.random() * rangeSize);
  
  return randomRange + rangeStart;
};
