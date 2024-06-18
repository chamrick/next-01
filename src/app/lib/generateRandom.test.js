import generateRandom from './generateRandom';

describe('Group tests of generateRandom (only 1 at present)', () => {
  test('random number output is between rangeStart and rangeEnd', () => {
    const rangeStart = 4;
    const rangeEnd = 22;
    const generated = generateRandom(4, 22);
  
    expect(generated).toBeGreaterThanOrEqual(rangeStart);
    expect(generated).toBeLessThanOrEqual(rangeEnd);
  });
});
