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


  <a href="#about"><router-link to="/about">About the Game</router-link></a>
  <!-- Right-aligned links -->
  <div class="topnav-right">
  <!-- <a href="#contact"><router-link to="/contact">Contact</router-link></a> -->


  </div>

</div>
<div class="footer">
  <div class="thetime" >Time left = <span id="timer" style="color:red"></span></div>
  <a href="#contact"><router-link to="/contact" class="btn btn-info btn-sm"><span class="glyphicons glyphicons-envelope"></span>contact us</router-link></a>
  <a href="#" class="btn btn-info btn-sm">
    <span class="glyphicon glyphicon-menu-left"></span> Back to Home
  </a>

</div>


    <router-view></router-view>
  </div>


</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
/*a
  html {
    background: #7fd4d3;
  }*/
  .footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: red;
   text-align: center;
}

  #app {
    /*height: 140vh;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    max-height: 900px;
    /*max-width: 100%;*/
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

  @media only screen and (min-width: 200px) {
    #app {
      width: 100%;


    }
   #topnav-right {
     display:hidden;
     padding: 0px;
     margin-top:-10px;
   }
   #topnav {
     display: ;
     padding: 0;
     max-height: 30px;
   }
   .topnav a {
     float: left;
     color: #f2f2f2;
     text-align: center;
     padding: 1px 3px;
     text-decoration: none;
     font-size: 17px;
   }
  }
  @media only screen and (min-width: 420px) {
    #app {
      width: 100%;


    }
   #topnav-right {
     display:hidden;
     padding: 0px;
     margin-top:-10px;
   }
   #topnav {
     display: ;
     padding: 0;
     max-height: 30px;
   }
   .topnav a {
     float: left;
     color: #f2f2f2;
     text-align: center;
     padding: 1px 3px;
     text-decoration: none;
     font-size: 17px;
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
    /*.topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 10px 11px;
      text-decoration: none;
      font-size: 17px;
    }*/
  }
</style>
