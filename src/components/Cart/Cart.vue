<template>
    <div class="container">
      <div class="col-sm-12 col-md-9 col-md-offset-1">
       <table class="table table-hover">
       <thead>
        <tr >
           <th>Product</th>
           <th>Quantity</th>
           <th class="text-center">Price</th>
           <th class="text-center">Total</th>
           <th> </th>
        </tr>
       </thead>
       
       <tbody >
   
        
        <tr v-for="item in items" :key="item.id" >
           
       <td class="col-sm-8 col-md-6">
        <div class="media">
         <a class="thumbnail pull-left" href="#">
            <img :src=item.imgSrc
            class="media-object" 
             style="width: 72px; height: 72px;"> 
            </a>
         <div class="media-body">
           <h4 class="media-heading">
           <a class="ab" @click="MoveToTheDetails(item.id)">
              {{ item.name }}</a>
           </h4>
           <span>Desc : </span>
           <span class="text-primary">
               <strong> {{ item.desc }} </strong>
           </span>
       </div>
       </div></td>
       <td class="col-sm-2 col-md-2 " style="text-align: center">
       <input type="number" 
        v-model="item.quantity"
        v-on:change="ChecknewQuantity(item.id, $event)"
       class="form-control"
       id="exampleInputEmail1" >
       </td>
       <td class="col-sm-1 col-md-1 text-center">
           <strong >$ {{ item.price }} </strong></td>
       <td class="col-sm-1 col-md-1 text-center">
       <strong>$ {{ item.price*item.quantity }}</strong></td>
       <td class="col-sm-1 col-md-1">
       <button type="button"
        class="btn btn-danger"
        @click="removeItem(item.id)"
       >
       <span class="fa fa-remove"></span> Remove
       </button></td>
       </tr>
   
    
       <tr>
       <td><h3>Total</h3></td>
       <td class="text-right"><h3><strong>${{TotalItemPrice}}</strong></h3></td>
       </tr>
   
       <tr>
       <td>
       <button type="button" class="btn btn-default">
       <span class="fa fa-shopping-cart"></span> Continue Shopping
       </button></td>
       <td>
       <button type="button" class="btn btn-success">
       Checkout <span class="fa fa-play"></span>
       </button></td>
       </tr>
   
       
       </tbody>
       </table>
       </div>
   
       </div>
   </template>
   <script>
   
        import { objectExpression } from '@babel/types';
import { mapActions, mapGetters } from 'vuex'; 
        export default{
            name:'Cart',
            data(){
                return {
                    items:[],
                    newarr:[],
                    TotalItemPrice:0
                }
            },
            mounted(){
                this.TotalPrice();
            },
            // filters:{
            //     DescFilters:(value)=>{
            //         return value.split(' ')[0] + ' '+ value.split(' ')[1]+
            //         value.split(' ')[2] + '....'
            //     },
            //     NameFilters:(value)=>{
            //         if(value.split(' ')[1]){
            //             return value.split(' ')[0] + ' '+ value.split(' ')[1];
            //         }else{
            //             return value.split(' '[0])
            //         }
            //     }
            // },
            computed:{
                ...mapGetters(['AllCatItems'])
            },
            created(){
                //this.items = this.AllCatItems
                this.GetProductsONCard();
            },
            methods:{
                ...mapActions([
                    'ChangeItemQuantity',
                    'RemoveItemFromCart',
                    'GetProdByID'
                ]),
                GetProductsONCard:function(){
                    //this.items = this.AllCatItems;
                    let arr = this.AllCatItems;
                   // let newarr = [];
                    for(let index = 0; index < arr.length; index++){
                        const data = arr[index];
                        this.GetProdByID(data.id).then((res)=>{
                            res[0].quantity = data.quantity;
                            this.newarr.push(res[0]);
                            
                        })
                    }
                    //console.log(this.newArr)
                    this.items = this.newarr;
                    console.log('Prod cart list',this.items);
                },
                ChecknewQuantity:function(Id, e){
                    if(e.target.value==0){
                        let newData = this.items.map(el =>{
                            if(el.id == Id)
                                return Object.assign({}, el, {quantity:1})
                                return el
                        });
                        this.items = newData;
                    }else{
                        let newData = this.items.map(el =>{
                            if(el.id == Id)
                            return Object.assign({}, el, {quantity:e.target.value})
                            return el
                        });
                        // change quantity on cart store
                        let NewD = {ID:Id, quantity:Number( e.target.value )}
                        this.ChangeItemQuantity(NewD);
                        // end cart 
                        this.items = newData;
                    }
                },
                MoveToTheDetails:function(Id){
                    this.$router.push({
                        path:'/Specificitem',
                        name:'Specificitem',
                        query:{
                            ID:Id,
                        }

                    }).catch(()=>{})
                },
                removeItem:function(Id){
                    let newArr = this.items.filter(x=>{return x.id != Id})
                    this.items = newArr;
                    this.RemoveItemFromCart(Id);
                },
                TotalPrice:function(){
                    const TheArrData = []
                    for(let index = 0; index < this.items.length; index++){
                        let total = parseInt(this.items[index].price)*
                            parseInt(this.items[index].quantity);
                        TheArrData.push(parseInt(total))
                    }
                    let lastNumber = TheArrData.reduce(function(a,b){
                        return a+b;
                    },0)
                    this.TotalItemPrice = lastNumber;
                }
            },
            watch:{
                items:function(){
                    this.TotalPrice();
                }
            }
        }
    </script>
   
   
   
   
   <style  scoped>
   .thumbnail{
     margin-right: 20px;
   }
   
   .ab {
       cursor: pointer;
   }
   </style>