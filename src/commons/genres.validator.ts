const genresValidator = (genres: string): boolean => {
    return /^\d+(,\d+)*$/.test(genres)
}

export default genresValidator;
