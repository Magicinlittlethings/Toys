<template>
   <div class=" px-10 py-4 w-full ">
     <div class="hidden lg:block">
      <div class="flex justify-between">
          <div class="flex justify-between mt-1.5">
              <a href="" class="hover:scale-110"><img src="u_telegram-alt.svg" class="h-6 w-6 mr-4"></a>
              <a href="" class="hover:scale-110"><img src="u_twitter.svg" class="h-6 w-6 mr-4"></a>
              <a href="" class="hover:scale-110"><img src="Frame.svg" class="h-6 w-6 mr-4"></a>
              <a href="" class="hover:scale-110"><img src="u_instagram.svg" class="h-6 w-6"></a>
          </div>
          <img src="Toy FaCes NFT.svg" class="h-10">
          <div class="mt-1.5">
              <button class="text-toygreen mr-4 text-base">Home</button>
              <button class="text-white mr-4 text-base hover:text-toygreen">About</button>
              <button class="border rounded-full bg-toygreen border-transparent px-2 py-1 text-base hover:bg-transparent hover:border-toygreen hover:text-white">Join Telegram <span class="inline-block"><img src="Icon.svg"></span></button>
          </div>

      </div>
     </div>
      <div class=" lg:hidden ">
      <div class="flex justify-between">
          <img src="Toy FaCes NFT.svg" class="h-6 md:h-8">
          <button @click="showMenu = true"> <fa  icon="bars" class=" text-2xl text-white hover:text-toygreen " /> </button>
      </div>

  </div>

      
  </div>
 
</template>

<script>
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTriggerPlugin);
export default {
    

}
</script>

<style>

</style>