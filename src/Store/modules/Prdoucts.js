
const state ={
    ProductsList:[
        
        { id:'12', CatID:'11', name: 'Cat i Phone 11 Pro s',  desc:'iphoe 11 pro back',  price : '599',   imgSrc:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'},
        { id:'14', CatID:'11', name: 'Cat Huawei s' ,desc:'Huawei Huawei' , price : '1000', imgSrc:'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg'},
        { id:'16', CatID:'33', name: 'Cat nike shirt s' ,desc:'red nike shirt' , price : '12', imgSrc:'https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=ghd0-00bh-djr6&pblegacy=1&pblegacysize=big&digest=3069003456'},
        { id:'18', CatID:'22',  name: 'Cat temperland shirt' ,desc:'black templerland shirt' , price : '20', imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
        { id:'20', CatID:'33',  name: 'Cat addidas shirt' ,desc:'addidas wight shirt' , price : '13', imgSrc:'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg'},
        { id:'24', CatID:'44',  name: 'Cat nike shose' ,desc:'black nike shose' , price : '50', imgSrc:'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'},
        { id:'26', CatID:'55',  name: 'Cat nikon Camera' ,desc:'nikon camera description' , price : '2400', imgSrc:'https://ih1.redbubble.net/image.479726964.0085/fposter,medium,wall_texture,product,750x1000.jpg'},
        { id:'28', CatID:'66', name: 'Cat Samsong Watch' ,desc:'samsong Glaxey Watch' , price : '5', imgSrc:'https://freepngimg.com/download/android/73674-gear-watches-samsung-smartwatch-camera-galaxy-smart.png'},
        { id:'30', CatID:'66', name: 'Mintra School Backpacks For Unisex - Light Blue' ,desc:'Brand: MintraType: School School BackpackssColor: Light BlueTargeted Group: Unisex' , price : '33', imgSrc:'https://daf2nnvanl0k4.cloudfront.net/catalog/product/1/_/1_5.png?width=700&height=1000&store=default&image-type=image'},
    
    ],
   // ProdListByPageNum:[],
    non:''
};

const getters = {
    AllProducts: (state) => state.ProductsList,
};

const actions = {
    async GetProducts({ commit }){
        const newProdData = [
            { id:'12', CatID:'11',  name: 'N Cat i Phone 11 Pro s',  desc:'iphoe 11 pro back',  price : '599',   imgSrc:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'},
            { id:'14', CatID:'11',  name: 'N Cat Huawei s' ,desc:'Huawei Huawei' , price : '1000', imgSrc:'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg'},
            { id:'16', CatID:'33',  name: 'N Cat nike shirt s' ,desc:'red nike shirt' , price : '12', imgSrc:'https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=ghd0-00bh-djr6&pblegacy=1&pblegacysize=big&digest=3069003456'},
            { id:'18', CatID:'22',  name: 'N Cat temperland shirt' ,desc:'black templerland shirt' , price : '20', imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
            { id:'20', CatID:'33',  name: 'N Cat addidas shirt' ,desc:'addidas wight shirt' , price : '13', imgSrc:'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg'},
            { id:'24', CatID:'44',  name: 'N Cat nike shose' ,desc:'black nike shose' , price : '50', imgSrc:'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'},
            { id:'26', CatID:'55',  name: 'N Cat nikon Camera' ,desc:'nikon camera description' , price : '2400', imgSrc:'https://ih1.redbubble.net/image.479726964.0085/fposter,medium,wall_texture,product,750x1000.jpg'},
            { id:'28', CatID:'66', name: 'N Cat Samsong Watch' ,desc:'samsong Glaxey Watch' , price : '5', imgSrc:'https://freepngimg.com/download/android/73674-gear-watches-samsung-smartwatch-camera-galaxy-smart.png'},
            { id:'30', CatID:'66', name: 'Mintra School Backpacks For Unisex - Light Blue' ,desc:'Brand: MintraType: School School BackpackssColor: Light BlueTargeted Group: Unisex' , price : '33', imgSrc:'https://daf2nnvanl0k4.cloudfront.net/catalog/product/1/_/1_5.png?width=700&height=1000&store=default&image-type=image'},
        ] // in real word you shuld return the respnose data from http srver
      commit('setProducts', newProdData )
    },
  async GetProdByID({commit}, ID){
    let itemINDEX = state.ProductsList.filter(x => x.id == ID);
    commit('non');
    return itemINDEX;
  }, 
  async GetProdByPageNumber({commit}, pageNum){
      console.log('pn', pageNum)
    const NewProdDataArr = [
            { id:'12', CatID:'11',  name: 'PN Cat i Phone 11 Pro s',  desc:'iphoe 11 pro back',  price : '599',   imgSrc:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'},
            { id:'14', CatID:'11',  name: 'PN Cat Huawei s' ,desc:'Huawei Huawei' , price : '1000', imgSrc:'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg'},
            { id:'16', CatID:'33',  name: 'PN Cat nike shirt s' ,desc:'red nike shirt' , price : '12', imgSrc:'https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=ghd0-00bh-djr6&pblegacy=1&pblegacysize=big&digest=3069003456'},
            { id:'18', CatID:'22',   name: 'PN Cat temperland shirt' ,desc:'black templerland shirt' , price : '20', imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
            { id:'20', CatID:'33',   name: 'PN Cat addidas shirt' ,desc:'addidas wight shirt' , price : '13', imgSrc:'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg'},
            { id:'24', CatID:'44',   name: 'PN Cat nike shose' ,desc:'black nike shose' , price : '50', imgSrc:'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'},
            { id:'26', CatID:'55',   name: 'PN Cat nikon Camera' ,desc:'nikon camera description' , price : '2400', imgSrc:'https://ih1.redbubble.net/image.479726964.0085/fposter,medium,wall_texture,product,750x1000.jpg'},
            { id:'28', CatID:'66',  name: 'PN Cat Samsong Watch' ,desc:'samsong Glaxey Watch' , price : '5', imgSrc:'https://freepngimg.com/download/android/73674-gear-watches-samsung-smartwatch-camera-galaxy-smart.png'},
    ] // ..
    commit('SetProdByPageNum', NewProdDataArr);
  },
  async ADD_NEW_PRODUCT({commit}, data){
    let NewDataArr ={};
    let newID = Math.floor(Math.random() * 50) + 10;
    NewDataArr = {id:newID, name:data.name, CatID:data.CatID,
    desc:data.desc, price:data.price, imgSrc: data.imgSrc};

    commit('NewProducts', NewDataArr);
  },
  async EditOneProd({commit},data){
    let objIndex = state.ProductsList.findIndex((obj=> obj.id == data.ID));
    let name  = data.name;
    let CatID  = data.CatID;
    let desc  = data.desc;
    let price  = data.price;
    let imgSrc  = data.imgSrc;
    let NewDatObj = {objIndex, name, CatID, desc, price, imgSrc}

    commit('EditOneProduct', NewDatObj);
    
  },
  async DeleteOneProd({commit}, data){
    let newArrDel = state.ProductsList.filter(x => {return x.id !=data.ID})
    commit('ReSetAndDelete', newArrDel);
  }
  

};

const mutations = {
    // work with Products List
    setProducts:
     (state, newProdData) => (state.ProductsList = newProdData),
     // new prod
     NewProducts:(state, newprod) => state.ProductsList.unshift(newprod),
     // edit prod 
     EditOneProduct:(state, NewDatObj) =>(state.ProductsList[NewDatObj.objIndex].name = NewDatObj.name,
      state.ProductsList[NewDatObj.objIndex].CatID = NewDatObj.CatID,
      state.ProductsList[NewDatObj.objIndex].desc = NewDatObj.desc,
      state.ProductsList[NewDatObj.objIndex].price = NewDatObj.price,
      state.ProductsList[NewDatObj.objIndex].imgSrc = NewDatObj.imgSrc),
    // delete prod
    ReSetAndDelete:(state, newArrDel) =>(state.ProductsList = newArrDel),
      // set prod by page num
    SetProdByPageNum:
     (state, NewProdDataArr) => (state.ProductsList = NewProdDataArr),
    // donse not do any thing
    non:
     (state) => (state.non = '')
};

export default {
    state,
    getters,
    actions,
    mutations
}


