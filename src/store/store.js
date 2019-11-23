import Vuex from 'vuex'

export default () => {
    return new Vuex.Store({
        state: {
            asideControl: false
        },
        mutations: {
            toggleAside(state, value) {
                state.asideControl = !state.asideControl
            }
        }
    });
};