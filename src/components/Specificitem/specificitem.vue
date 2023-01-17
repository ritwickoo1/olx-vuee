<template>
    <div>
     <div class="card">
      <img class="card-img-top" :src="ResultItems.imgSrc" alt="Card image cap">
       <div class="card-body">
         <h4 class="card-title">{{ResultItems.name}}</h4>
         <p class="card-text">{{ ResultItems.desc }} </p>
         <h4> Price : ${{ ResultItems.price }}</h4>
         <h4><i class="fas fa-tags"></i> : {{ ResultItems.CatName }}</h4>
         <a 
         class="btn btn-primary" v-if="ResultItems.Incart" >
         Add To Card</a>
        <a 
         class="btn btn-danger" v-if="!ResultItems.Incart" >
         Remove From Card</a>
       </div>
      </div>
    
    </div>
    
    </template>
    <script>
    import { mapActions, mapGetters } from 'vuex';

        export default{
            name: "Specificitem",
            data(){
                return {
                    ResultItems:{
                        id:'',
                        imgSrc:'',
                        name:'',
                        price:null,
                        desc:'',
                        CatName:'',
                        Incart:true
                    }
                }
            },
            created(){
                // let ProdID = this.$route.query.ID;
                // let data = { id:'12', 
                //             name: 'i Phone 11 Pro s',  
                //             desc:'iphoe 11 pro back',  
                //             price : '599',   
                //             imgSrc:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
                //         }
                // this.ResultItems.id = ProdID;
                // this.ResultItems.name = data.name;
                // this.ResultItems.imgSrc = data.imgSrc;
                // this.ResultItems.price = data.price;
                // this.ResultItems.desc = data.desc;
                // console.log('item id', ProdID, 'item data',this.ResultItems)
                this.Getroutedata();
            },
            methods:{
                ...mapActions([
                  'GetProdByID'
                ]),
                async Getroutedata(){
                    let ProdID = this.$route.query.ID;
                    await this.GetProdByID(ProdID)
                    .then((res)=>{
                        (console.log('specific item', res))
                        this.ResultItems.id = ProdID;
                        this.ResultItems.name = res[0].name;
                        this.ResultItems.imgSrc = res[0].imgSrc;
                        this.ResultItems.price = res[0].price;
                        this.ResultItems.desc = res[0].desc;
                    })    
                }
            }
        }

    </script>
    
    <style scoped>
        .card{
    width: auto;
    text-align: center;
}

.card>img{
    width: 20% !important;
    margin: 1px auto  !important;
    }
    </style>
    