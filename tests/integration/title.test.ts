import validate from "../../src/validators/title.validator";

describe('Title Validator', () => {
  it('should be valid', () => {
    const result = validate('Abc-031');

    expect(result).toBe(true);
  });
});