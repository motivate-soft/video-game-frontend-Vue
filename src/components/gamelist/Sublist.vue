<template>
  <div class="w-full flex-col text-white leading-loose text-left m-auto">
    <div class="flex justify-between items-start pb-3">
      <span
        class="text-lg xl:text-xl pl-5 pr-20"
        :style="'background: linear-gradient(to right, #F78383 , #181818)'"
      >{{ subtitle }}</span>
      <span
        class="text-lg xl:text-xl pt-4 cursor-pointer"
        @click="overflow=!overflow"
      >{{ overflow? "view all": "collapse" }}</span>
    </div>
    <!-- <div
      :class="'w-full flex items-start mb-3 justify-start ' + (overflow? 'justify-start overflow-x-auto': 'flex-wrap')"
      :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
    >
      <button class="" @click="moveCarousel(-1)" :disabled="atHeadOfList">before</button>
      <Game-Card v-for="(item, index) in items" :key="index" :game="item" />
      <button class="" @click="moveCarousel(1)" :disabled="atEndOfList">before</button>
    </div>-->
    <div class="w-full flex flex-wrap items-start mb-3 justify-start">
      <!-- <carousel :per-page="3" :paginationPosition="'bottom-overlay'" :mouse-drag="true" class="w-full"> -->
      <carousel :v-if="overflow" :per-page="4" :paginationEnabled="false" :navigationNextLabel="'next'" :mouse-drag="true" class="w-full">
        <slide v-for="(item, index) in items" :key="index"><Game-Card  :game="item"/></slide>
      </carousel>
      <!-- <Game-Card :v-if="!overflow" v-for="(item, index) in items" :key="index" :game="item" /> -->
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
    overflow: true,
    currentOffset: 0,
    windowSize: 3,
    paginationFactor: 250
    // items: [
    //   { name: "Kin Khao", tag: ["Thai"] },
    //   { name: "Jū-Ni", tag: ["Sushi", "Japanese", "$$$$"] },
    //   { name: "Delfina", tag: ["Pizza", "Casual"] },
    //   { name: "San Tung", tag: ["Chinese", "$$"] },
    //   { name: "Anchor Oyster Bar", tag: ["Seafood", "Cioppino"] },
    //   { name: "Locanda", tag: ["Italian"] },
    //   { name: "Garden Creamery", tag: ["Ice cream"] }
    // ]
  }),
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>