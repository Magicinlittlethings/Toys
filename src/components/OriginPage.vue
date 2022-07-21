<template>
  <div class="origin text-white  relative pb-20 lg:pb-40">
      <img class=" absolute w-screen h-full " src="Frame1000002745.png">
      <p class="strangerr text-4xl md:text-5xl lg:text-6xl  font-bold text-center mb-12 pt-12  ">
          Toy Face Origins
      </p>
      <p class="text-left text-sm md:text-base lg:px-24 md:px-12 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
           fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
           lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim 
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum 
           lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo 
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus 
            lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed 
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae 
             facilisis nisi, ac posuere leo.
        </p>
        <p class="hidden md:block text-left text-sm md:text-base lg:px-24 md:px-12 px-8 mt-4">


            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim 
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum 
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

             Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo 
             vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus 
             lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed 
             lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae 
            facilisis nisi, ac posuere leo.
        </p>
        <p class="hidden lg:block text-left text-sm md:text-base lg:px-24 md:px-12 px-8 mt-4">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim 
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum 
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo 
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus 
            lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed 
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis 
      </p>
       <p v-if="readMore === true" class="md:hidden text-left text-sm md:text-base lg:px-24 md:px-12 px-8 mt-4 ease-in duration-200">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim 
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum 
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo 
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus 
            lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed 
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis 
      </p>
       <p v-if="readMore === true" class="lg:hidden text-left text-sm md:text-base lg:px-24 md:px-12 px-8 mt-4 ease-in duration-200">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim 
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum 
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo 
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus 
            lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed 
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis 
      </p>
      <div class="flex justify-center mt-6 lg:hidden">
      <button @click="readMore = !readMore" class="relative  text-white hover:text-toygreen  hover:scale-105 ease-in-out duration-200 text-lg ">
         <button class="inline-block" v-if = "readMore === false" >Show More</button>
         <button class="inline-block" v-if = "readMore === true" >Show Less</button>
         <fa :class="`  ${ readMore === true ?  'antirotation' : 'rotation' } inline-block ml-2 text-base`" icon="chevron-down" />
      </button>
      </div>
  </div>
</template>

<script>
export default {
data(){
  return{
   readMore:false
 
}
}
}
</script>

<style>

.strangerr { font-family: migra, sans-serif; }
.rotation { 
  animation:rotate 0.1s linear  forwards
}
.antirotation { 
  animation:antirotate 0.1s linear forwards 
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
/*@font-face { font-family: migra; src: url('C:\Users\BLACKGIRL\Documents\toy - Copy\public\MigraExtrabold800.otf');}*/
</style>