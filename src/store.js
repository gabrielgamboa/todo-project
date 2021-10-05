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
    },

    toggleTodo({ commit }, todo) {
        commit('toggleTodo', todo);
    },

    removeTodo({ commit }, todo) {
        commit('removeTodo', todo);
    },

    checkAll({ commit }) {
        const uncheckedsIds = state.todos.filter(todo => !todo.checked).map(todo => todo.id);
        commit('toggleList', uncheckedsIds)
    },

    uncheckAll({ commit }) {
        const checkedsIds = state.todos.filter(todo => todo.checked).map(todo => todo.id);
        commit('toggleList', checkedsIds)
    },

    removeAllCheckeds( {commit, state} ) {
        const checkedsIds = state.todos.filter(todo => todo.checked).map(todo => todo.id);
        commit('removeList', checkedsIds)
    }

}

const getters = {
    uncheckeds(state) {
        return state.todos.filter(todo => !todo.checked);
    },

    checkeds(state) {
        return state.todos.filter(todo => todo.checked);
    },
    
}


const mutations = {
    addTodo(state, payload) {
        state.todos.push(payload)
    },

    setLoading(state, payload) {
        state.loading = payload
    },

    toggleTodo(state, payload) {
        const index = state.todos.findIndex((item) => item.id === payload.id);
        if (index > -1) {
            const checked = !state.todos[index].checked;
            Vue.set(state.todos, index, { ...state.todos[index], checked });
        }
    },

    removeTodo(state, payload) {
        state.todos = state.todos.filter(item => item.id !== payload.id);
    },

    toggleList(state, todosIds) {
        const todos = state.todos.map(i => {
            return todosIds.includes(i.id) ? {...i, checked: !i.checked } : i
        })

        state.todos = todos
    },

    removeList(state, todosIds) {
        const todos = state.todos.filter(item => !todosIds.includes(item.id))
        state.todos = todos
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store