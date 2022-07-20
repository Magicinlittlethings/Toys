<template >
  <div class="body bg-toyblack ">
        <transition-group name="fade" appear @before-enter = "beforeEnter" @enter = "enter" ><div v-if="showMenu === true" class="fixed  z-40 top-10 h-screen w-full pt-28 bg-toyblack lg:hidden">
          
          <div class=" flex flex-col justify-center">
          
              <button class="text-toygreen  text-base md:text-lg ease-in-out duration-300" >Home</button>
               <transition appear @before-enter = "beforeEnter" @enter = "enter1"><button v-if="showMenu===true" class="text-white  text-base hover:text-toygreen  my-6 md:text-lg ">About</button></transition>
              <transition appear @before-enter = "beforeEnter" @enter = "enter2"><div v-if="showMenu===true" class="flex justify-center"><button  class="border rounded-full bg-toygreen border-transparent  px-5 py-1 text-base md:text-lg hover:bg-transparent hover:border-toygreen hover:text-white ease-in-out duration-300 ">Join Telegram <span class="inline-block"><img src="Icon.svg"></span></button></div></transition>
          </div>
         <div class="flex justify-center mt-28">
              <transition appear @before-enter = "beforeEnter" @enter = "enter3"><a v-if="showMenu=true" href="" class="hover:scale-110 ease-out "><img src="u_telegram-alt.svg" class="h-6 w-6 mr-6"></a></transition>
              <transition appear @before-enter = "beforeEnter" @enter = "enter4"><a v-if="showMenu=true" href="" class="hover:scale-110 ease-out "><img src="u_twitter.svg" class="h-6 w-6 mr-6"></a></transition>
              <transition appear @before-enter = "beforeEnter" @enter = "enter5"><a v-if="showMenu=true" href="" class="hover:scale-110 ease-out "><img src="Frame.svg" class="h-6 w-6 mr-6"></a></transition>
              <transition appear @before-enter = "beforeEnter" @enter = "enter6"><a v-if="showMenu=true" href="" class="hover:scale-110 ease-out "><img src="u_instagram.svg" class="h-6 w-6"></a></transition>
          </div>

       </div></transition-group>
      <div class=" px-10 py-4 bg-toyblack sticky top-0 z-40 ">
       <div class="hidden lg:block">
         <div class="flex justify-between">
          <div class="flex justify-between mt-1.5">
              <a href="" class="hover:scale-110 ease-in-out duration-300"><img src="u_telegram-alt.svg" class="h-6 w-6 mr-4"></a>
              <a href="" class="hover:scale-110 ease-in-out duration-300"><img src="u_twitter.svg" class="h-6 w-6 mr-4"></a>
              <a href="" class="hover:scale-110 ease-in-out duration-300"><img src="Frame.svg" class="h-6 w-6 mr-4"></a>
              <a href="" class="hover:scale-110 ease-in-out duration-300"><img src="u_instagram.svg" class="h-6 w-6"></a>
          </div>
          <img src="Toy FaCes NFT.svg" class="h-10">
          <div class="mt-1.5">
              <button class="text-toygreen mr-4 text-base ease-in-out duration-300">Home</button>
              <button class="text-white mr-4 text-base hover:text-toygreen ease-in-out duration-300">About</button>
              <button class="border rounded-full bg-toygreen border-transparent px-5 py-1 text-base hover:bg-transparent hover:border-toygreen hover:text-white ease-in-out duration-300">Join Telegram <span class="inline-block"><img src="Icon.svg"></span></button>
          </div>

      </div>
     </div>
      <div class=" lg:hidden ">
      <div class="flex justify-left">
          <img src="Toy FaCes NFT.svg" class="h-6 md:h-8">
          
      </div>
       <button @click="showMenu = !showMenu" :class="` ${ showMenu === true ?  'active' : 'nonactive' } absolute top-3 right-8 `">
         <div :class="` ${ showMenu === true ?  'bar1' : '' } w-6 mt-1  h-1 border rounded-md bg-white `"></div>
         <div :class="` ${ showMenu === true ?  'bar2' : '' } w-6 mt-1  h-1 border rounded-md bg-white `"></div>
         <div :class="` ${ showMenu === true ?  'bar3' : '' } w-6 mt-1  h-1 border rounded-md bg-white `"></div>
         <!-- <button  @click="showMenu = true"> <fa  icon="bars" :class="` ${ showMenu === true ?  'active' : '' } text-2xl text-white hover:text-toygreen `" /> </button>
          <button  @click="showMenu = false"> <fa  icon="times" :class="`${ showMenu === false ?  'nonactive' : '' }  text-2xl lg:text-3xl text-white hover:text-toygreen `" /> </button> -->
       </button>

  </div>

      
  </div>
    <NavBar class=""  />
    <HeroSection class="h-3/4  pt-6 lg:pt-20 lg:h-full relative" />
    <CarouselSlider class="mt-32 lg:mt-24" />
    <UniqueCollectibles  class="mt-2 lg:mt-20"/>
    <OriginPage  class="mt-20 lg:mt-40 " />
    <FaQs class=" mt-32 lg:mt-40" />
    <CarouselSlider class="mt-32 lg:mt-40" />
    <FooterSection class="mt-32 lg:mt-40" />
    
  </div>
 
</template>

<script>
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTriggerPlugin);

import HeroSection from './components/HeroSection.vue'
import UniqueCollectibles from './components/uniqueCollectibles'
import CarouselSlider from './components/CarouselSlider.vue'
import OriginPage from './components/OriginPage.vue'
import FaQs from './components/FaQs.vue'
import FooterSection from './components/FooterSection.vue'
export default {
  name: 'App',
  components: {
  
    HeroSection,
    CarouselSlider,
    UniqueCollectibles,
    OriginPage,
    FaQs,
    FooterSection
    
  },
  data(){
  return{
   showMenu:false
 
}
},
methods:{
    
    enter(el){
    gsap.from(el,{
     y:-50,
     autoAlpha:0,
     duration:1,
      
      
      
      
     })
  },
  leave(el){
    gsap.to(el,{
     y:-50,
     autoAlpha:0,
     duration:1,
      
      
      
      
     })
  },
   enter1(el){
    gsap.from(el,{
     y:-30,
     autoAlpha:0,
     delay:0.8,
      duration:0.5,
      
      
      
      
     })
  },
 
  enter2(el){
    gsap.from(el,{
     y:-20,
     autoAlpha:0,
     delay:1.1,
      duration:0.5,
      
      
      
      
     })
  },
  enter3(el){
    gsap.from(el,{
    
     autoAlpha:0,
     delay:1.6,
      duration:0.2,
      
      
      
      
     })
  },
  enter4(el){
    gsap.from(el,{
     x:-20,
     autoAlpha:0,
     delay:1.8,
      duration:0.2,
      
      
      
      
     })
  },
   enter5(el){
    gsap.from(el,{
     x:-20,
     autoAlpha:0,
     delay:2.0,
      duration:0.2,
      
      
      
      
     })
  },
   enter6(el){
    gsap.from(el,{
     x:-20,
     autoAlpha:0,
     delay:2.2,
      duration:0.2,
      
      
      
      
     })
  }
 }

}
</script>

<style>
::-webkit-scrollbar{
width:12px;
background:black;
 
}
::-webkit-scrollbar-thumb{
background:linear-gradient(transparent, #24E795);
border-radius: 4px;
 
}
::-webkit-scrollbar-thumb:hover{
background:linear-gradient(transparent, #67E9F1);
border-radius: 6px;
 
}
body{
 margin:0;
 height:100%;
 
}
.bar1{
 animation:translation1 0.3s linear forwards;
 
}
.bar2{
 opacity:0;
 
}
.bar3{
  
 animation:translation2 0.3s linear forwards;
 
}
.active{
 animation:rotation 0.3s linear ;
 
}
.nonactive{
 animation:antirotation 0.3s linear ;
 
}
.fade-leave-to{
 animation:fades 0.6s linear;
 
}
@keyframes fades {
 
to{
  opacity:0;
  transform:translateY(-50px);
}
}
@keyframes translation1 {
 
to{
  width: 27px;
 transform:rotate(50deg) translateY(12px);
}
}
@keyframes translation2 {
 
to{
  width:27px;
 transform:rotate(-50deg) translateY(-12px); ;

}
}
@keyframes rotation {
 
to{
 transform:rotate(180deg);
}
}
@keyframes antirotation {
 
to{
 transform:rotate(-180deg);
}
}
</style>
