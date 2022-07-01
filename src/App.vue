<template >
  <div class="body bg-toyblack">
     <div v-if="showMenu" class="absolute z-50 top-0 h-screen w-screen pt-20 bg-black">
          
          <div class=" flex flex-col justify-center">
          
              <button class="text-toygreen  text-base " >Home</button>
              <button class="text-white  text-base hover:text-toygreen  my-6">About</button>
              <div class="flex justify-center"><button class="border rounded-full bg-toygreen border-transparent  px-2 py-1 text-base hover:bg-transparent hover:border-toygreen hover:text-white ">Join Telegram <span class="inline-block"><img src="Icon.svg"></span></button></div>
          </div>
         <div class="flex justify-center mt-20">
              <a href="" class="hover:scale-110"><img src="u_telegram-alt.svg" class="h-6 w-6 mr-6"></a>
              <a href="" class="hover:scale-110"><img src="u_twitter.svg" class="h-6 w-6 mr-6"></a>
              <a href="" class="hover:scale-110"><img src="Frame.svg" class="h-6 w-6 mr-6"></a>
              <a href="" class="hover:scale-110"><img src="u_instagram.svg" class="h-6 w-6"></a>
          </div>

      </div>
    <NavBar class="bg-toyblack fixed z-40"  />
    <HeroSection class="h-screen  pt-20 lg:h-full relative" />
    <CarouselSlider />
    <UniqueCollectibles  class="mt-32"/>
    <OriginPage  class="mt-96 lg:mt-32 " />
    <FaQs class="mt-32" />
    <CarouselSlider class="mt-32" />
    <FooterSection class="mt-10" />
    
  </div>
 
</template>

<script>

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import UniqueCollectibles from './components/uniqueCollectibles'
import CarouselSlider from './components/CarouselSlider.vue'
import OriginPage from './components/OriginPage.vue'
import FaQs from './components/FaQs.vue'
import FooterSection from './components/FooterSection.vue'
export default {
  name: 'App',
  components: {
    NavBar,
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
</style>
