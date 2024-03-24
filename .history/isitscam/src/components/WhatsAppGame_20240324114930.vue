<template>
    <div class=" h-5/6 w-[340px] bg-white">
        <div class=" relative rounded-lg outline-gray-400 outline outline-8 h-full">
    <div class="w-full h-16 bg-black flex items-center ">
        <div class="flex flex-row items-center justify-center"><img  class=" rounded-full h-10 w-10 mx-4"src="https://assets-global.website-files.com/6257de5eae6add9d091204a4/6301f82eb7fffa583f9df5bf_Brendan%20Choo.png">
        <div class="items-center justify-center m-2"><p>Brendan (Son)</p></div></div>
    </div>
    <div class="w-4/5 mx-4 my-4 rounded-md bg-black"><p class="p-2 text-left">Oh lawd have mercy they're sending me off to arrakis and some guy named Paul Muad'ib is gonna fuck the living shit outta me im scared momma</p></div>
    <div class="w-1/2 mx-4 my-4 rounded-md ml-auto mr-4 bg-black"><p class="p-2 text-left"> Love you son bye 😘</p></div>
    <div class="flex justify-center rounded-md align-center"><div class="w-1/5 -mx-1 -my-1 rounded-md bg-black "><p class=" p-1 text-sm">Today</p></div></div>
    <div class="w-4/5 mx-4 my-4  rounded-md bg-black"><p class="p-2 text-left">Yo my g obviously we had some rough times innit but heres a link <a>https://www.isitscam.com</a></p></div>
    <div class="w-1/3 mx-4 my-4 rounded-md ml-auto mr-4 bg-black"><p class="p-2 text-left"> Hello Polis?</p></div>
    <div class="w-full rounded-lg h-16 bg-black flex items-center absolute bottom-0 flex align-middle justify-center"> 

        <button type="button" class=" outline-white outline outline-2 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
</button>

    </div>
</div>


    </div>
    
    
    <div>
<p>IsitScam?</p>
<button @click="toggleButton" type="button" class="  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">It's a Scam!!!</button>
<button @click="toggleButton" type="button" class="  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">It's fine</button>
<button @click="toggleButton" type="button" class="  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Quit Game</button>
</div>
        
    </template>
    
    <script>
    export default {
      data() {
        return {
        }
      },
      methods: {
        toggleButton() {
    console.log()
            this.$emit('whatsappClicked', false);
        }
      }
    };
    </script>