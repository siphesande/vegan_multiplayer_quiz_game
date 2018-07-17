<template>
  <div id="app">

    <nav class="navbar navbar-expand-sm navbar-light bg-primary">
  <form class="form-inline">
    <button class="btn btn-info btn-sm" type="button" style="color:red">Veg Quiz Game</button>
    <a href="#oneplayer"><router-link to="/oneplayer" class="btn btn-info btn-sm"><span class="glyphicons glyphicons-envelope"></span>Player Alone</router-link></a>
    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Info</button>
  </form>
</nav>

<div class="modal fade" id="myModal" role="dialog">
     <div class="modal-dialog">

       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title" style="color:black"><span class="glyphicon glyphicon-info-sign"></span>About the Game</h4>
         </div>
         <div class="modal-body">
           <p style="color:black">Vegan Activism multiplayer quiz game is not just for fun. It is built to help vegans/plant-based people/activists to be able to test their knowleged about veganism.
           This guiz game will hellp you to answer FAQ about veganism. It will also help you to able respond to non-vegan 30 excuses for not going vegan
           It very easy to play, It's Multiple choice. The is available online and therefore you can play with anyone everywhere they are in the world. </br>
           <li style="color: red;"> You have 30 minutes to finish</li>
           <li style="color: blue;"> You can also choose to playe alone.</li>
           <li style="color: blue;"> We will play together!</li> </br>
           <li style="color: black;">Most of the Questions and Answers are taken from <a href="https://www.earthlinged.com/ebook/">Earthlings Ed (e-book).</a></li></p>
         </div>
         <div class="modal-footer">
            <p style="color:black"> <span class="glyphicon glyphicon-envelope"></span>E-mail:vegancomputerprogrammer@gmail.com</p>
           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         </div>
       </div>


   </div>

 </div>



<div class="footer" style="background-color:#00b3b3">
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
  /*.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: red;
   text-align: center;
}*/

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
