import genresValidator from "../../src/commons/genres.validator";

describe('Genres Validator', () => {
    it('should be valid', () => {
      const result = genresValidator('12,14');
  
      expect(result).toBe(true);
    });
  });
  