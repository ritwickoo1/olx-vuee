<template>
  <div>
    <!-- Start of the navBar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" tag="a" class="navbar-brand">The App</router-link>
      <!-- <a href="" class="navbar-brand">The App</a> -->

      <button v-on:click="isActive = !isActive" class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div v-bind:class="[isActive ? 'collapse navbar-collapse show' : 'collapse navbar-collapse']">

        <ul class="navbar-nav mr-auto">
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <!-- search start -->
          <Search />
          <!-- search end -->

          <router-link tag="button" to="/LoginRegister" class='btn btn-outline-primary my-2 my-sm-2 m-2'>
            Login | register
          </router-link>

          <button class='btn btn-outline-danger my-2 my-sm-2 m-2'>Logout</button>

          <router-link to="/Cart" class="btn btn-outline-warning my-2 my-sm-2 m-2" tag="button">Cart</router-link>
          <!--        
          <button  class='btn btn-outline-warning my-2 my-sm-2 m-2'
          >Cart</button> -->
          <router-link to="/Admin" class="btn btn-outline-danger my-2 my-sm-2 m-2" tag="button">Admin</router-link>
          <!-- <button  class='btn btn-outline-danger my-2 my-sm-2 m-2'
          >Admin</button> -->

          <router-link tag="button" to="/UserProfile" class='btn btn-outline-dark my-2 my-sm-2 m-2'>
            Profile </router-link>

        </form>
      </div>
    </nav>
    <!-- end off the navbar  -->

  </div>
</template>

    
<script>
import Search from './Search.vue'
export default {
  name: 'Header',
  data() {
    return {
      isActive: false,
      auth: {
        isUserLogedIN: false,
        IsUserAdmin: false
      }
    }
  },
  components: {
    Search
  }
}
</script>
    
    
    
    
<style scoped>
.userWords {
  width: 80%;
  background-color: #f8f9fa !important;
  margin: 5px auto;
  font-style: italic;
  color: #007bff;
  padding: 10px;
}
</style>
