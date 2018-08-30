import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    storeMsg: 0,
}

const mutations = {
    setStoreMsg(state, arg){
        state.storeMsg = arg;
    }
}

const store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store;