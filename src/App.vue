<template>
  <div id="app">

    <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-info btn-lg" type="button" style="color:red">Vegan Multiplayer Quiz Game</button>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">About the Game</button>
  </form>
</nav>

<div class="modal fade" id="myModal" role="dialog">
     <div class="modal-dialog">

       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title" style="color:black">About the Game</h4>
         </div>
         <div class="modal-body">
           <p style="color:black">Vegan multiplayer quiz game is not just for fun. It is built to help vegans/plant-based people/activists to be able to test their knowleged about veganism.
           This guiz game will hellp you to answer FAQ about veganism. It will also help you to able respond to non-vegan 30 excuses for not going vegan
           It very easy to play, It's Multiple choice. The is available online and therefore you can play with anyone everywhere they are in the world. Most of the Questions and Answers are taken from Earthlings Ed (e-book).</p>
         </div>
         <div class="modal-footer">
            <p style="color:black">E-mail:vegancomputerprogrammer@gmail.com</p>
           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         </div>
       </div>


   </div>

 </div>



<div class="footer">
  <div class="thetime" >Time left = <span id="timer" style="color:red"></span></div>
  <!-- <a href="#contact"><router-link to="/contact" class="btn btn-info btn-sm"><span class="glyphicons glyphicons-envelope"></span>contact us</router-link></a> -->
  <a href="/" class="btn btn-info btn-sm">
    <span class="glyphicon glyphicon-home"></span>Home
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


  /*resposive id app*/

  @media only screen and (min-width: 200px) {
    #app {
      width: 100%;


    }

  }
  @media only screen and (min-width: 420px) {


    #app {
      width: 100%;



  }
}


  /* Responsive navigation menu (for mobile devices) */
  @media screen and (max-width: 600px) {

  }
  @media screen and (max-width: 820px) {



  }

</style>
