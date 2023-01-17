<template>
  <div class="container">
    <Header />
    </div>
    <router-view/>
</template>

<script>
import Header from './components/header/Header.vue'
export default {
  components: {Header},
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
  margin-top: 0px;
}
</style>
