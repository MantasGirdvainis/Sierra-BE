import genresValidator from "../../src/commons/genres.validator";

describe('Genres Validator', () => {
  it('should be valid', () => {
    const result = genresValidator('12,14');
    expect(result).toBe(true);
  });

  it('should be invalid because an emty value string', () => {
    const result = genresValidator('');
    expect(result).toBe(false)
  });

  it('should be invalid because value is null', () => {
    const result = genresValidator(' ');
    expect(result).toBe(false)
  });

  it('should be invalid because value is &', () => {
    const result = genresValidator('&');
    expect(result).toBe(false)
  });
});
