<template>
  <div class="w-full flex-col text-white text-left mx-auto">
    <div class="flex flex-wrap justify-start items-start pb-3">
      <div class="w-1/4" v-for="(item, index) in items" :key="index">
        <Game-Card :game="item" />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";

export default {
  name: "GameSublist",
  components: {
    GameCard
  },
  props: {
    subtitle: String,
    items: Array
  }
};
</script>