<template>
  <div id="app">
    <!-- Top navigation -->
<div class="topnav">

  <!-- Centered link -->
  <div class="topnav-centered">
    <!-- <a href="#home" class="active"><router-link to="/">Vegan Multiplayer Quiz Game</router-link></a> -->
    <a class="active">Vegan Multiplayer Quiz Game</a>
         <p><em>We Will Play Together</em></p>
  </div>

  <!-- Left-aligned links (default) -->


  <a href="#about"><router-link to="/about">About</router-link></a>
  <!-- Right-aligned links -->
  <div class="topnav-right">
  <a href="#contact"><router-link to="/contact">Contact</router-link></a>

  </div>

</div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>a
  html {
    background: #7fd4d3;
  }

  #app {
    /*height: 140vh;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    max-height: 900px;
    /*float: centre;*/

  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .topnav {
    position: relative;
    overflow: hidden;
    background-color: #333;
  }

  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }

  .topnav-centered a {
    float: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .topnav-right {
    float: right;
  }
  /*resposive id app*/

  /*@media only screen and (min-width: 420px) {
    #app {
      width: 100%;


    }
  }*/
  @media only screen and (max-width: 600px) {
    #app {
        background-color: lightblue;
    }
}


  /* Responsive navigation menu (for mobile devices) */
  @media screen and (max-width: 600px) {
    .topnav a, .topnav-right {
      float: none;
      display: block;
    }

    .topnav-centered a {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }
  }
</style>
