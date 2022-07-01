<template>
  <div class=" unique relative lg:overflow-hidden ">
      <p class="text-base text-gray-200 pl-10 hidden lg:block ">welcome to Toy Set ! Meet our collection of <span class="font-semibold px-1">2000 </span>unique Toy <br>faces. Support and Join our community, crazy adventures <br> and prices are waiting for you. </p> 
      <div class="lg:py-96 py-10  flex justify-center  ">
          <img src="Group 5928.png" class="lg:h-40 lg:w-96 h-24 w-72">
         
      </div>
       <p class="text-base text-gray-200  text-center lg:hidden  ">welcome to Toy Set ! Meet our collection of <span class="font-semibold px-1">2000 </span>unique Toy <br>faces. Support and Join our community, crazy adventures <br> and prices are waiting for you. </p> 
       <div class="">
          <img src="Rectangle 611 (1).png" class="images image1">
          <img src="Rectangle 612.png" class="images  image2">
          <img src="Rectangle 613.png" class=" images image3">
          <img src="Rectangle 614@2x.png" class="images image4">
          <img src="Rectangle 615.png" class="images image5">
          <img src="Rectangle 616.png" class="images image6">
      </div>
      
    </div>
    
</template>

<script>
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTriggerPlugin);
export default {
      methods:{
    
  
  
  
  }

}
</script>

<style>
@media only screen and (max-width: 1022px) {
  .images{
height:442px;
width:400px;
position:absolute;
top:18rem;
left:20rem;

}
}
@media only screen and (min-width:1023px) {
  .image1{
height:442px;
width:400px;
position:absolute;
left:30rem;
top:0rem;
z-index:4;
}
.image2{
height:442px;
width:400px;
position:absolute;
left:0;
top:9rem;
z-index:2;
transform:rotate(5deg);
}
.image3{
height:442px;
width:400px;
position:absolute;
right:-4rem;
z-index: 3;
top:9rem;
transform:rotate(-7deg);
}
.image4{
height:442px;
width:400px;
position:absolute;
right:26rem;
top:43rem;
transform: rotate(6deg);
z-index:3;
}
.image5{
height:442px;
width:400px;
position:absolute;
left:50rem;
top:42rem;
transform: rotate(7deg);
z-index:4;
}
.image6{
height:442px;
width:400px;
position:absolute;
right:45rem;
top:44rem;
transform:rotate(6deg);
z-index:2;
}
}

</style>