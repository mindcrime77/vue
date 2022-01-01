import { createStore } from 'vuex'

export default createStore({
    state: {
        test: 'VUEX',
        user: {
            username: '',
            eamil: '',
            password: ''
        }
    },
    getters: {
        test(state) {
            return state.test
        }
    },
    actions: {
        setUser(state, user) {
            state.user = user
        }
    }

})