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
                this.Getroutedata();
            },
            methods:{
                ...mapActions([
                  'GetProdByID',
                  'GetCatByID',
                  'GetCategories'
                ]),
                async Getroutedata(){
                    this.GetCategories();
                    let ProdID = this.$route.query.ID;
                    await this.GetProdByID(ProdID)
                    .then((res)=>{
                        (console.log('specific item', res))
                        this.ResultItems.id = ProdID;
                        this.ResultItems.name = res[0].name;
                        this.ResultItems.imgSrc = res[0].imgSrc;
                        this.ResultItems.price = res[0].price;
                        this.ResultItems.desc = res[0].desc;
                        this.GetCatByID(res[0].CatID).then((res)=>{
                            console.log('res',res)
                            this.ResultItems.CatName = res[0].name;
                        })
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
    