import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});

export default store;