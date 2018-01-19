import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 0,
    num:0,
};
const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--,
    ADD_ITEM: (state, num) => state.num += num,
    SUB_ITEM: (state, num) => state.num -= num,
};
const actions = {
    increment({commit}){
        commit('increment')
    }
};
const getters = {
    num: state => state.num
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store;