<template>
  <div class="w-full flex-col text-white text-left px-6 m-auto">
    <div class="flex justify-between items-start pb-3">
      <span class="text-xl xl:text-2xl pl-5 pr-20" :style="'background: linear-gradient(to right, #F78383 , #181818)'">{{ subtitle }}</span>
      <span class="text-lg xl:text-xl pt-4">查看全部</span>
    </div>
    <div class="flex flex-wrap justify-between items-start pb-3">
      <Game-Card v-for="item in items" 
        :key="item['_id']" 
        :title="item['title']"
        :image="item['image']"
        :genre="item['genre']"
        :playtime="item['playtime']"
      />
    </div>
  </div>
</template>

<script>
import GameCard from "./gameCard.vue";

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