<template>
    <h5>Shopping Cart</h5>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
  computed:{
    // ...mapGetters['AllProducts']
  },
  created(){
    // console.log('app vue getters',this.AllProducts);
    // this.GetProducts();
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
