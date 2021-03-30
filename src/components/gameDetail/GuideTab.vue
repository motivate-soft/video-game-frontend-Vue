<template>
  <div v-if="game" class="flex flex-col">
    <!-- <span class="text-2xl py-5">Game Detail</span> -->
    <div>
      <div
        v-for="(item, index) in game.controllers"
        :key="index"
        :class="getClassName(item.type)"
      >
        <span class="text-xl py-5">{{ item.title }}</span>
        <img v-if="item.type=='image'" :src="baseURL(item.src)" class="max-w-full max-h-500 object-scale-down object-left float-left"/>
        <p class="flex-grow text-md leading-10 pb-5" v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../constants/config";

export default {
  name: "GuideTab",
  props: {
    game: Object
  },
  methods: {
    baseURL(url) {
      return config.baseURL + url;
    },
    getClassName(type) {
      if(type=='image') return "float-left flex flex-col w-full xl:w-1/2 px-5";
      else return "float-left flex flex-col w-full px-5";
    }
  }
};
</script>
