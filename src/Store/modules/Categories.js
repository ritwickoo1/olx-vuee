const state = {
    CateGorisList:[
        // {id:'1', name:'phones'},
        // {id:'2', name:'computers'},
        // {id:'3', name:'shirts'},
        // {id:'4', name:'shoes'},
        // {id:'5', name:'cameras'},
        // {id:'6', name:'cars'}
    ],
    non:''
}

const getters={
    allCategories:(state)=>(state.CateGorisList),
}

const actions={
    async GetCategories({commit}){
        const newCatdata=[
            {id:'11', name:'phones C'},
            {id:'22', name:'computers C'},
            {id:'33', name:'shirts C'},
            {id:'44', name:'shoes C'},
            {id:'55', name:'cameras C'},
            {id:'66', name:'Bag C'}
        ]
        commit('setCategories',newCatdata)
    },
    async GetCatByID({commit},ID){
        let item = state.CateGorisList.filter(x=> x.id == ID);
        console.log('item id',ID,item);
        commit('non');
        return item;
    }
    
}
const mutations={
    setCategories:
    (state, categories)=>(state.CateGorisList=categories),
    non:
    (state)=> state.non=''
};

export default{
    state,
    getters,
    actions,
    mutations
}