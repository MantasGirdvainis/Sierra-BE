import { sortOptionsList } from "../services/sort-options.service";

const sortOptionvalidate = (sortOption: string) => {

    const sortOptionsListToValidate = sortOptionsList.map(option => option.code)

    return sortOptionsListToValidate.includes(sortOption);
};

export default sortOptionvalidate;
