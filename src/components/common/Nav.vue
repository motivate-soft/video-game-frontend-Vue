<template>
  <div class="w-full flex justify-center">
    <nav
      class="w-full flex items-center justify-between flex-wrap p-2 max-w-1440 px-40"
    >
      <div class="flex items-center flex-shrink-0 text-white">
          <router-link to="/games" class="font-semibold text-2xl xl:text-3xl tracking-tight mr-5">iPUPPET</router-link>
          <a href="#" class="h-full items-center mx-2 xl:mx-4 text-xl flex">
            <img :src="require('@/assets/images/nav/home.png')" class="px-2 h-5 xl:h-6"/>
            <!-- <span class="hidden lg:flex">主页</span> -->
            <span class="hidden lg:flex">HOME</span>
          </a>
          <router-link to="/games" class="h-full items-center mx-2 text-xl relative flex">
            <img :src="require('@/assets/images/nav/grid.png')" class="px-2 h-5 xl:h-6"/> 
            <!-- <span class="hidden lg:flex">软件</span> -->
            <span class="hidden lg:flex">SOFTWARE</span>
            <div class="absolute min-w-full h-3px rounded-full" style="background-color: #84E4A3; bottom:-19px"/>
          </router-link>
      </div>
      <div class="relative">
          <input class="bg-whitegray rounded-full w-56 p-2 pl-10 text-black" :style="'border-width: 0; outline-width: 0'"/>
          <div class="absolute flex items-center h-full" :style="'left:0; top:0'">
            <img :src="require('@/assets/images/nav/search.png')" class="p-2"/>
          </div>
        </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex ml-32 xl:ml-56">
        <a href="#" class="">
          <img :src="require('@/assets/images/nav/lightning.png')" class="pr-2 h-5 xl:h-6"/>
        </a>
        <a href="#" class="ml-2">
          <img :src="require('@/assets/images/nav/alarm.png')" class="pr-2 h-5 xl:h-6"/>
        </a>
        <a href="#" class="ml-2">
          <img :src="require('@/assets/images/nav/signal.png')" class="pr-2 h-5 xl:h-6"/>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>