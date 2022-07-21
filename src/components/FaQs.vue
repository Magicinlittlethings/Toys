<template>
  <div class="px-6 lg:px-10">
      <p class="strangerr text-4xl md:text-5xl lg:text-6xl  font-bold text-center mb-12 text-white">Frequently asked questions</p>
      <div class="hidden lg:block">
      <div class="grid grid-cols-3 gap-6 mt-20 ">
          <div class="bg-toyblackk py-6 px-3 text-white h-auto my-24 ">
              <p class="text-xl font-semibold mb-5">What are Toyfaces?</p>
              <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
          </div>
          <div>
           <div class="bg-toyblackk py-6 px-3 text-white  mb-6">
              <p class="text-xl font-semibold mb-5">What are NFTs?</p>
              <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </div>
           <div class="bg-toyblackk py-6 px-3 text-white mt-6">
              <p class="text-xl font-semibold mb-5">What are the benefits?</p>
              <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </div>
          </div>
           <div>
           <div class="bg-toyblackk py-6 px-3 text-white mb-6">
              <p class="text-xl font-semibold mb-5">When does minting start?</p>
              <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </div>
           <div class="bg-toyblackk py-6 px-3 text-white mt-6">
              <p class="text-xl font-semibold mb-5">Who can mint?</p>
              <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </div>
          </div>
      </div>
      </div>
      
      <div class="lg:hidden text-white bg-toyblackk px-3 md:px-6 border border-transparent rounded-md pb-6">
         <button @click="dropDown = !dropDown, dropDown4 = false, dropDown2 = false, dropDown1 = false, dropDown3 = false" :class="`${ dropDown === true ?  'full' : 'h-16' } py-6 relative overflow-hidden  px-4 border-b border-toyblack`">
             <div class="flex justify-between mb-5">
              <p class="text-lg md:text-xl font-semibold  ">What are Toyfaces?</p> 
              <p><fa :class="`${ dropDown === true ?  'antirotation' : 'rotation' }  ml-2 text-base`" icon="chevron-down" /></p>
             </div>
              <p class="text-sm md:text-base text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </button>
         <button @click="dropDown1 = !dropDown1, dropDown4 = false, dropDown2 = false, dropDown3 = false, dropDown = false" :class="`${ dropDown1 === true ?  'full' : 'h-16' } py-6 relative overflow-hidden  px-4 border-b border-toyblack`">
             <div class="flex justify-between mb-5">
              <p class="text-lg md:text-xl font-semibold  ">What are NFTs?</p> 
              <p><fa :class="` ${ dropDown1 === true ?  'antirotation' : 'rotation' }  ml-2 text-base`" icon="chevron-down" /></p>
             </div>
              <p class="text-sm md:text-base text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </button>
           <button @click="dropDown2 = !dropDown2, dropDown4 = false, dropDown3 = false, dropDown1 = false, dropDown = false" :class="`${ dropDown2 === true ?  'full' : 'h-16' } py-6 relative overflow-hidden  px-4 border-b border-toyblack`">
             <div class="flex justify-between mb-5">
              <p class="text-lg md:text-xl font-semibold  ">What are the benefits?</p> 
              <p><fa :class="` ${ dropDown2 === true ?  'antirotation' : 'rotation' }  ml-2 text-base`" icon="chevron-down" /></p>
             </div>
              <p class="text-sm md:text-base text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </button>
           <button @click="dropDown3 = !dropDown3, dropDown4 = false, dropDown2 = false, dropDown1 = false, dropDown = false" :class="`${ dropDown3 === true ?  'full' : 'h-16' } py-6 relative overflow-hidden  px-4 border-b border-toyblack`">
             <div class="flex justify-between mb-5">
              <p class="text-lg md:text-xl font-semibold  ">When does minting start?</p> 
              <p><fa :class="` ${ dropDown3 === true ?  'antirotation' : 'rotation' }  ml-2 text-base`" icon="chevron-down" /></p>
             </div>
              <p class=" text-sm md:text-base text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </button>
           <button @click="dropDown4 = !dropDown4, dropDown3 = false, dropDown2 = false, dropDown1 = false, dropDown = false" :class="`${ dropDown4 === true ?  'full' : 'h-16' } py-6 relative overflow-hidden  px-4 border-b border-toyblack`">
             <div class="flex justify-between mb-5">
              <p class="text-lg md:text-xl font-semibold  ">Who can mint?</p> 
              <p><fa :class="` ${ dropDown4 === true ?  'antirotation' : 'rotation' }  ml-2 text-base`" icon="chevron-down" /></p>
             </div>
              <p class="text-sm md:text-base text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                   fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                   lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
           </button>
      </div>
      <div class ="flex justify-center mt-16 lg:mt-10">
        <button class="border rounded-full bg-toygreen border-transparent px-8 md:px-16 lg:px-20 py-2 text-base hover:bg-transparent hover:border-toygreen hover:text-white ease-in-out duration-300">Read More <span class="inline-block"><img src="Icon.svg"></span></button>
      </div>
  </div>
</template>

<script>
export default {
data(){
  return{
   dropDown:false,
   dropDown1:false,
   dropDown2:false,
   dropDown3:false,
   dropDown4:false,
 
}
}
}
</script>

<style>
.rotation { 
  animation:rotate 0.3s linear   ;
}
.antirotation { 
  animation:antirotate 0.3s linear forwards ;
}
.full { 
  animation:fullheight 2s linear forwards;
}
@keyframes rotate {
 
to{
  
  transform:rotate(180deg);
}
}
@keyframes antirotate {
 
to{
  
  transform:rotate(-180deg);
}
}
@keyframes fullheight {
 
20%{
  
  height:20%;
}
40%{
  
  height:40%;
}
60%{
  
  height:60%;
}
80%{
  
  height:80%;
}
100%{
  
  height:100%;
}
}
.strangerr { font-family: migra, sans-serif; }
@font-face { font-family: migra; src: url('MigraExtrabold800.otf');}
</style>