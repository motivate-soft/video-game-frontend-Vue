<template>
  <div class="w-full flex-col text-white text-left px-6 m-auto">
    <div class="flex flex-wrap justify-between items-start pb-3">
      <Game-Card v-for="item in items" 
        :key="item['_id']" 
        :title="item['title']"
        :image="item['image']"
        :genre="item['genre']"
        :playtime="item['playtime']"
        :ID="item._id"
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