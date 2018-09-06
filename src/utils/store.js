import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie'

Vue.use(Vuex);

const state = {
    storeMsg: 0,
    userId: '',
    bookName: '',
    bookNo: '',
    author: '',
    endDate: ''

}

const mutations = {
    setStoreMsg(state, arg) {
        state.storeMsg = arg;
        Cookies.set('storeMsg', arg)
    },
    setUserInfo(state, arg) {
        state.userId = arg;
        Cookies.set('userId', arg)
    },
    setAuthor(state, author) {
        state.author = author;
        Cookies.set('author', author);
    },
    setBookName(state, arg){
        state.bookName = arg;
        Cookies.set('bookName', arg);
    },
    setBookNo(state, arg){
        state.bookNo = arg;
        Cookies.set('bookNo', arg);
    },
    setEndDate(state, arg){
        state.endDate = arg;
        Cookies.set('endDate', arg);
    },
}

const store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store;