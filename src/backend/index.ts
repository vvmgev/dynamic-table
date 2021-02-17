import data from './data';
let type = 'car'

export const getData = (from ,limit) => {
    const data = Object.assign({}, getAllData()[type]);
    const end = from + limit >= data.items.length
    data.items = data.items.slice(from, end ? data.items.length : from + limit);
    return {data, end};
};

export const getAllData = () => data;
export const setType = newType => type = newType;
