/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { todos: [], loading: false }

const actions = {
    addTodo({ commit }, todo) {
        return new Promise(resolve => {
            commit('setLoading', true)
            setTimeout(() => {
                todo.id = Date.now()
                commit('addTodo', todo)
                commit('setLoading', false)
                resolve(todo)
            }, 1000)
        })
    }
}


const mutations = {
    addTodo(state, payload) {
        state.todos.push(payload)
    },

    setLoading(state, payload) {
        state.loading = payload
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store