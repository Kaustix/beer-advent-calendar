import { createStore } from 'vuex';
import beer from './beer.module';

const store = createStore({
    modules: {
        beer
    }
});

export default store;