const state = {
        counter: 0
}

const getters = {
        getDoubleCounter(state) { //state objeyi al 
                return state.counter
        },
        stringCounter(state) {
                return state.counter + ".Kez Tiklandi"
        },

}

const mutations = { //Veriyi Güncelle //Commit destegi ile çalışır 
        increaseCounter(state) {
                state.counter++
        },
        decreaseCounter(state) {
                state.counter--
        },
}

const actions = {
        increment({ commit }) {
                commit("increaseCounter")
        },
        decrement({ commit }) {
                commit("decreaseCounter")
        },
        incAsync({ commit }, payload) {
                setTimeout(() => {
                        commit("increaseCounter")
                }, payload.time)
        },
}

export default {
        state,
        getters,
        mutations,
        actions
}