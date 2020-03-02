import * as types from './mutation-types'

const mutations = {
    [types.MODIFY_NAME](state,data){
        state.name = data;
    }
};

export default mutations;