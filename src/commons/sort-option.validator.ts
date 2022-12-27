const sortOptionvalidate = (sortOption: string) => {

    const sortOptionsList = ['original_title.asc', 'original_title.desc', 'vote_average.desc', 'vote_average.asc'];
    return sortOptionsList.includes(sortOption);

};

export default sortOptionvalidate;
