<template>
  <div class="w-full flex-col text-white leading-loose text-left m-auto">
    <div class="flex justify-between items-start pb-3">
      <span
        class="text-lg xl:text-xl pl-5 pr-20"
        :style="'background: linear-gradient(to right, #F78383 , #181818)'"
      >{{ subtitle }}</span>
      <span
        class="text-lg xl:text-xl pt-4 cursor-pointer"
        @click="isAll=!isAll"
      >{{ !isAll? "view all": "collapse" }}</span>
    </div>
    <!-- <div
      :class="'w-full flex items-start mb-3 justify-start ' + (isAll? 'justify-start isAll-x-auto': 'flex-wrap')"
      :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
    >
      <button class="" @click="moveCarousel(-1)" :disabled="atHeadOfList">before</button>
      <Game-Card v-for="(item, index) in items" :key="index" :game="item" />
      <button class="" @click="moveCarousel(1)" :disabled="atEndOfList">before</button>
    </div>-->
    <div class="w-full flex flex-wrap items-start mb-3 justify-start">
      <div v-for="(item, index) in items" :key="index" class="w-1/4">
        <Game-Card v-if="isAll || index < 4" :game="item" />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "GameSublist",
  components: {
    GameCard,
    Carousel,
    Slide
  },
  props: {
    subtitle: String,
    items: Array
  },
  data: () => ({
    isAll: false
  }),
  computed: {},
  methods: {}
};
</script>