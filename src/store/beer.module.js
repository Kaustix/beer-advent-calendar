import { getBeers } from '@/api/beer.api';
import { FETCH_BEERS } from '@/store/action.types';
import { SET_BEERS } from '@/store/mutation.types';
import { sortBy } from '@/utils';

const initialState = {
    beers: []
};

export const state = { ...initialState };

// TODO: Only Handling Happy path for now
export const actions = {
    async [FETCH_BEERS](context) {
        const { data } = await getBeers();
        context.commit(SET_BEERS, data);
    }
}

export const mutations = {
    [SET_BEERS](state, beers) {
        state.beers = beers;
    }
}

export const getters = {
    beers(state) {
        return sortBy(state.beers, 'day');
    }
}

export default {
    state, 
    actions,
    mutations,
    getters
}