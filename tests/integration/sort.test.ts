import sortOptionvalidate from "../../src/commons/sort-option.validator";

describe('Sort Option validator', () => {
    it('should be valid', () => {
        const result = sortOptionvalidate('original_title.asc');
        expect(result).toBe(true);
    });

    it('should be valid', () => {
        const result = sortOptionvalidate('original_title.desc');
        expect(result).toBe(true);
    });

    it('should be valid', () => {
        const result = sortOptionvalidate('vote_average.desc');
        expect(result).toBe(true);
    });

    it('should be valid', () => {
        const result = sortOptionvalidate('vote_average.asc');
        expect(result).toBe(true);
    });

    it('should be invalid', () => {
        const result = sortOptionvalidate(' ');
        expect(result).toBe(false);
    });

    it('should be invalid', () => {
        const result = sortOptionvalidate('123Hi');
        expect(result).toBe(false);
    });

    it('should be invalid', () => {
        const result = sortOptionvalidate('!@');
        expect(result).toBe(false);
    });
});
