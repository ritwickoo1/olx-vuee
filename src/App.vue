<template>
  <div class="container-fluid">
    <Header />
    </div>
    <router-view/>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/header/Header.vue'

export default {
  components: {Header},
  name: 'App',
  computed:{
    // ...mapGetters['AllProducts']
  },
  created(){
    // console.log('app vue getters',this.AllProducts);
     this.GetCartItem();
  },
  methods:{
    ...mapActions([
      'GetCartItem'
    ])
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
.clear{
  width: 100%;
  height: 1px;
  clear: both;
  display: block;
}

/* .xp{
  padding: 10px;
  margin: 5% auto;
} */


/* animation fade mode start here  */
.fade-enter{
  opacity:0
}


.fade-enter-active {
  transition:opacity 1.5s;
  opacity:0.5;
}

.fade-leave-active {
  transition:opacity 0.5s;
  opacity: 0;
}

/* slide */
.slide-enter {
  opacity:0;

}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
    opacity:0;
    position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(30px);
    transform: translateX(30px);
  }
  to{
      transform: translateY(0);
    transform: translateX(0px);  
  }
}

@keyframes slide-out {
    from {
    transform: translateY(0);
    transform: translateX(0);
  }
  to{
      transform: translateY(30px);
    transform: translateX(30px);  
  }
}
</style>
