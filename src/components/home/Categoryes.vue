<template>
  <div >
  
    <ul class="list-group list-group-flush">
     
      <li class="list-group-item" v-for="item in CategoriesList" :key="item.id">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input v-on:change="checkCat(item.id)" :id="item.id" type="checkbox" class="custom-control-input">
          <label :for="item.id" class="custom-control-label" >{{ item.name }}</label>
        </div>
      </li>
  
    </ul>
  
  </div>
  </template>
  
  <script>

    export default{
      name: 'Categoryes',
      data(){
        return{
          CategoriesList:[
            {id:1,name:'phone'},
            {id:2,name:'shirts'},
            {id:3,name:'laptops'},
            {id:4,name:'shoes'},
            {id:5,name:'watches'},
          ]
        }
      },
      methods:{
        checkCat(cat){
          console.log('cat id',cat)
          this.$emit('CheckCat',cat)
        }
      }
    }
</script>
  <style scoped>
  
  .act {
          background-color: gainsboro;
  }
  </style>
  