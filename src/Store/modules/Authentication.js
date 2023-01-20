const state = {
    IsAuthenticated: {isLogedIN:false, isAdmin: false}
};

const getters= {
    UserAuth: (state) =>(state.IsAuthenticated)
}

const actions = {
    async SetUserAuth({commit}, data){
        // this data will include if user is logedin
        let newStatus = {isLogedIN: data.isLogedIN, isAdmin: data.isAdmin}
        localStorage.setItem("Auth", JSON.stringify(newStatus));
        commit('SetAndGetUserAuthStatus',newStatus)
    },
    async GetUserAuth({commit}){
        if(localStorage.getItem("Auth")){
            let AuthData = JSON.parse(localStorage.getItem("Auth"));
            commit("SetAndGetUserAuthStatus", AuthData);
        }
    }
}

const mutations = {
    SetAndGetUserAuthStatus:
    (state, UserAuthStatus) => (state.IsAuthenticated.isAdmin = UserAuthStatus.isAdmin,
    state.IsAuthenticated.isLogedIN = UserAuthStatus.isLogedIN)
}
export default{
    state,
    getters,
    actions,
    mutations
}