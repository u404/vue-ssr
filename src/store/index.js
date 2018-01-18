import Vue from 'vue'
import Vuex from 'vuex'
import movieApi from '../api/movieApi'





Vue.use(Vuex)


export function createStore() {
    return new Vuex.Store({
        state: {
            movingList: {}
        },
        actions: {
            getMovingList ({commit, state}) {
                return movieApi.getMovies({city: state.city}).then(res => {
                    commit('movingList', { list: res.data })
                }).catch(e=>console.log(e))
            },
        },
        mutations: {
            movingList(state, {list}) {
                state.movingList = list
            }
        },
        getters: {
            movingList(state){
                return state.movingList
            }
        }
    })
}
