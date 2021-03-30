<template>
  <div class="w-full flex-col text-white text-left m-auto">
    <div class="flex flex-wrap justify-start items-start pb-3">
      <Game-Card v-for="(item, index) in items" 
        :key="index" 
        :game="item"
      />
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