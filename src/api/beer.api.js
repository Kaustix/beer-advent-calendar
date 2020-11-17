import { get } from '@/api/fetch';

export const getBeers = () => get('/beers');

export default {
    getBeers
}