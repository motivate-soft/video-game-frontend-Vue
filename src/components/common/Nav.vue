<template>
  <div class="w-full flex justify-center">
    <nav
      class="w-full flex items-center justify-between flex-wrap p-2 max-w-1600"
    >
      <div class="flex items-center flex-shrink-0 text-white">
          <router-link to="/games" class="font-semibold text-3xl xl:text-40 tracking-tight">iPUPPET</router-link>
          <a href="#" class="hidden h-full lg:flex items-center ml-8 xl:ml-16 text-xl xl:text-2xl">
            <img :src="require('@/assets/images/nav/home.png')" class="pr-2 h-6 xl:h-8"/> 主页
          </a>
          <router-link to="/games" class="hidden h-full lg:flex items-center ml-5 xl:ml-10 text-xl xl:text-2xl relative">
            <img :src="require('@/assets/images/nav/grid.png')" class="pr-2 h-6 xl:h-8"/> 软件
            <div class="absolute min-w-full h-1 rounded-full" style="background-color: #84E4A3; bottom:-20px"/>
          </router-link>
      </div>
      <div class="relative">
          <input class="rounded-full w-64 p-2 pl-10 text-black" :style="'border-width: 0; outline-width: 0'"/>
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
          <img :src="require('@/assets/images/nav/lightning.png')" class="pr-2 h-6 xl:h-8"/>
        </a>
        <a href="#" class="ml-8">
          <img :src="require('@/assets/images/nav/alarm.png')" class="pr-2 h-6 xl:h-8"/>
        </a>
        <a href="#" class="ml-8">
          <img :src="require('@/assets/images/nav/signal.png')" class="pr-2 h-6 xl:h-8"/>
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