import genresValidator from "../../src/commons/genres.validator";

describe('Genres Validator', () => {
    it('should be valid', () => {
      const result = genresValidator('12,14');
      const result2 = genresValidator('');
      const result3 = genresValidator(' ');
      const result4 = genresValidator('&')

      expect(result).toBe(true);
      expect(result2).toBe(false);
      expect(result3).toBe(false);
      expect(result4).toBe(false);

    });
  });
  