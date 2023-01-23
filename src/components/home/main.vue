<template>
    <div>
        <Sugproducts />
        
        <hr>
    <div class="col-md-2" style="float:left;margin: 1px 2%;">
     <Categoryes v-on:CheckCat="CheckTheCat"/>
    </div>
   
      
   
   
    <div class="col-md-9">
 
    <div class="container">
      <div class="card-group">
          <div class="row " v-if = "isLoaded" >
      <!-- <transition-group name="fade" tag="div" class="row"> -->
       
       
       <div class="card col-md-4 border-0"  v-for="(item, index) in items" :key="item.id">
        <img class="card-img-top border-0"  :src="item.imgSrc" alt="Card image cap" >
         <div class="card-body border-0" >
         <h6>Price: ${{ item.price }}</h6>
         
         <!-- <h5 class="card-title vx">{{ item.name }}</h5> -->
          <router-link :to="{path:'/Specificitem',query:{ID: item.id}}"
            tag = "h5" class="card-title vx border-0">{{ item.name }}</router-link>
          
         <button v-if="item.IsInCart"
         v-on:click="RemoveFromCart(item.id, index)"
         class=" btn btn-danger btn-primary-spacing" >
         <small >Remove From Cart</small> </button>
         <button v-else
           class=" btn btn-primary" 
           v-on:click="AddToCart(item.id,index)">
           Add To Cart</button>
       
   
        </div>
   
   
    
   
   
       </div>
     </div>
      <!-- </transition-group> -->
      
     </div>
    </div>
   
   
   
   
   
   <hr>
   <div class="container wid">
    <div class="row d-flex justify-content-center">
     <nav aria-label="Page navigation  ">
      <ul class="pagination">
       <li class="page-item">
         <button class="page-link "  v-on:click="NextPrevPage(false)">
           <span aria-hidden="true">&laquo;</span>
           <span class="sr-only">Previous</span>
         </button>
       </li>
   
     
       <li class="page-item"  v-for="(page, idx) in PageArray " :key="idx">
         <button :class="PageSelected === page ?
       'page-link active': 'page-link '" 
       v-on:click="changePage(page)"
       > {{page }}  </button></li>  
     
   
       <li class="page-item">
         <button class="page-link" v-on:click="NextPrevPage(true)">
           <span aria-hidden="true">&raquo;</span>
           <span class="sr-only" >Next</span>
         </button>
        </li>
       </ul>
      </nav>
     </div>
   </div>
   
   
   
   
   
   
   </div>
   
   <!-- <hr> -->
   <!-- <div class="clear xp"></div> -->
   
   
   <div class="clear xp"></div>
   
   
   
   
   
    </div>
   </template>
  

<script>
import { mapActions, mapGetters } from 'vuex';
import Categoryes from './Categoryes.vue'
import  Sugproducts from './Sugproducts.vue'
export default {
    name: "Main",
    data(){
        return {
            items:[],
            PageArray:[],
            PageSelected:3,
            CheckedCat:[],
            isLoaded: true
        }
    },
    components:{
      Categoryes,
      Sugproducts
    },
    // filters:{
    //   MaxName:function(value){
    //     if(value.length < 8) return value;
    //       return value.substr(0,8) + '..';
    //   } 
    // },
    computed:{
      ...mapGetters(['AllProducts'])
    },
    created(){
     
      //console.log('app vue getters',this.AllProducts);
      this.GetProducts(); 
    },
    mounted(){
        if(!this.$route.query.page){
       this.$router.push({
         path:'/',
         name:'Main',
         query:{
           page:1,
         }
       }).catch(()=>{})
     }
     this.PageSelected = parseInt(this.$route.query.page)
     //
     this.getProddata()
     this.PageNation()
    },
    methods:{
        ...mapActions([
          'GetProducts',
          'GetProdByPageNumber',
          'CheckIfInCart',
          'SetNewCartItem',
          'RemoveItemFromCart'
        ]),
        getProddata(){
            this.isLoaded = false;
            let data = [];
            data = this.AllProducts;
            for(let index = 0; index < data.length; index++){
              const EIId = data[index].id;
              this.CheckIfInCart(EIId).then((res)=>{
                console.log('d',res);
                let objIndex = data.findIndex((obj => obj.id == EIId));
                data[objIndex].IsInCart = res;
                this.isLoaded = true;
              })
            }
            console.log('data',data);
            this.items = data;
        },
        AddToCart(id,index){
          this.isLoaded = false;
          this.items[index].IsInCart = true;
          this.isLoaded = true;
          this.SetNewCartItem(id);
          this.getProddata();
        },
        RemoveFromCart(id,index){
          this.isLoaded = false;
          this.items[index].IsInCart = false;
          this.isLoaded = true;
          this.RemoveItemFromCart(id);
          this.getProddata();
        },
        PageNation(){
            this.PageArray = [];
            let Scale = this.PageSelected + 3;
            for ( let index = this.PageSelected; index < Scale; index++ ){
                this.PageArray.push(index);
            }
            console.log('pagenation', this.PageArray);
            this.getProddata();
        },
        changePage(page){
         this.GetProdByPageNumber(page);
         this.PageSelected = page;
         this.$router.push({
           path:'/',
           name:'Main',
           query:{
             page:page,
           }
         });
         this.getProddata();
       },
       NextPrevPage(con){
         if(con == false && this.PageSelected == 1){
           console.log('non')
         }
         if(con == false && this.PageSelected !==1){
           this.PageSelected = this.PageSelected -1;
           this.changePage(this.PageSelected);
           this.PageNation();
           this.getProddata();
           console.log('n', this.PageSelected)
         }
         if(con == true){
           this.PageSelected = this.PageSelected + 1;
           this.changePage(this.PageSelected);
           this.PageNation();
           this.getProddata();
           console.log('n ', this.PageSelected)
         }
       },
       CheckTheCat(cat){
        console.log('cat id', cat);
        if(this.CheckedCat.indexOf(cat)===-1){
          this.CheckedCat.push(cat);
        }else{
            this.CheckedCat = this.CheckedCat.filter(e=>e!== cat)
        }
        this.items = [
                { id:'12', name: 'i Phone 11 Pro s',  desc:'iphoe 11 pro back',  price : '599',   imgSrc:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'},
                { id:'14', name: 'Huawei s' ,desc:'Huawei Huawei' , price : '1000', imgSrc:'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg'},
                { id:'16',  name: 'nike shirt s' ,desc:'red nike shirt' , price : '12', imgSrc:'https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=ghd0-00bh-djr6&pblegacy=1&pblegacysize=big&digest=3069003456'},
                { id:'18',  name: 'temperland shirt' ,desc:'black templerland shirt' , price : '20', imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
                { id:'20',  name: 'addidas shirt' ,desc:'addidas wight shirt' , price : '13', imgSrc:'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg'},
                { id:'24',  name: 'nike shose' ,desc:'black nike shose' , price : '50', imgSrc:'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'},
                { id:'26',  name: 'nikon Camera' ,desc:'nikon camera description' , price : '2400', imgSrc:'https://ih1.redbubble.net/image.479726964.0085/fposter,medium,wall_texture,product,750x1000.jpg'},
                { id:'28', name: 'Samsong Watch' ,desc:'samsong Glaxey Watch' , price : '5', imgSrc:'https://freepngimg.com/download/android/73674-gear-watches-samsung-smartwatch-camera-galaxy-smart.png'},
        
            ]
        console.log('cat id list', this.CheckedCat)
       }
    }
}   
</script>

<style scoped>
.card{
    width: 10rem;
    padding:30px;
  }
.btn-primary-spacing 
{
margin-right: 5px;
}

.active, .active:hover {
    background-color: #F44336;
    color: white;
  }
  
  .vx:hover{
  cursor: pointer;
  color: darkred;
  }
  .card>img{
      width: 100%;
      height: 12rem;
      margin: 3px auto !important;
    }
</style>