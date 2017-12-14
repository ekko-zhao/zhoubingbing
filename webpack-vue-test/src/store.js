export var store = {
    state: {
        // 签约状态
        signStatus: false
    },
    mutations: {
        signStatus(state, status) {
            state.signStatus = status;
        }
    }
}
