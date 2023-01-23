<template>
    <div>
        <h3 class="hS" v-if="BigData.length>0">Items that You may Like</h3>
     
     <div class="container">
          <transition-group
           name="fade"
           tag="div" class="row" v-if="isLoad" >
            <div class="col" v-for="item in BigData" :key="item.id" >
             <div class="card border-0" >
              <img class="card-img-top" :src="item.imgSrc">
                <div class="card-block">
                  <router-link
                  :to="{path:'/SpecificItem', query:{ID:item.id}}"
                  class="card-title vx"
                  tag="h6"
                  >
                   {{ item.name  }}
                  </router-link>
  
                 <p class="card-text">Price $:{{item.price}}</p>
    
            </div>
            </div>
           </div>
          </transition-group>
        </div>
    </div>
    </template>
    
    
    <script>
    export default {
      data() {
        return {
          BigData:[],
          isLoad:Boolean
        }
      },
      created() {
       setTimeout(()=>{
         let Arr = [
              { id:'12', CatID:'11', name: 'i Phone 11 Pro' , desc:'iphoe 11 pro back', price : '599', imgSrc:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'},
              { id:'14', CatID:'11', name: 'Huawei' ,desc:'Huawei Huawei' , price : '1000', imgSrc:'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg'},
              { id:'16', CatID:'33', name: 'nike shirt' ,desc:'red nike shirt' , price : '12', imgSrc:'https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=ghd0-00bh-djr6&pblegacy=1&pblegacysize=big&digest=3069003456'},
              { id:'18', CatID:'22', name: 'temperland shirt' ,desc:'black templerland shirt' , price : '20', imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
              { id:'20', CatID:'33', name: 'addidas shirt' ,desc:'addidas wight shirt' , price : '13', imgSrc:'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg'},
              { id:'24', CatID:'44', name: 'nike shose' ,desc:'black nike shose' , price : '50', imgSrc:'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'},
              { id:'26', CatID:'55', name: 'nikon Camera' ,desc:'nikon camera description' , price : '2400', imgSrc:'https://ih1.redbubble.net/image.479726964.0085/fposter,medium,wall_texture,product,750x1000.jpg'},
              { id:'28', CatID:'66', name: 'Samsong Watch' ,desc:'samsong Galxy Watch' , price : '5', imgSrc:'https://freepngimg.com/download/android/73674-gear-watches-samsung-smartwatch-camera-galaxy-smart.png'},
              { id:'30', CatID:'66', name: 'Mintra School Backpacks For Unisex - Light Blue' ,desc:'Brand: MintraType: School School BackpackssColor: Light BlueTargeted Group: Unisex' , price : '33', imgSrc:'https://daf2nnvanl0k4.cloudfront.net/catalog/product/1/_/1_5.png?width=700&height=1000&store=default&image-type=image'},
          ];
  
         const shuffled = Arr.sort(()=> 0.5 - Math.random());
         let selected = shuffled.slice(0, 5);
         this.BigData = selected;
         this.isLoad  = true;
         console.log('data x', this.BigData)
       }, 5000)
      },
    //   filters:{
    //     capitalize:(value) =>{
       
    //        if(value.lenght > 8) return value;
    //        return value.substr(0,8) + '..';
         
    //     }
    //   }
    }
    </script>
    
    <style scoped>
        
        .card{
        width: 10rem;
        padding:10px;
        }
        .card>img{
            height: 100px;
        width: 100px;
        }
    
        .col {
            margin: 1%;
                 margin-left: auto;
        margin-right: auto;
        width: 10em;
        }
    
     .vx:hover{
       cursor: pointer;
       color: darkred;
     }
    
     .hS{
       background: beige;
        padding: 3px;
        font-family: monospace;
        font-style: oblique;
     }
    </style>
    