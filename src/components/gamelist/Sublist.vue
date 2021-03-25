<template>
  <div class="w-full flex-col text-white leading-loose text-left m-auto">
    <div class="flex justify-between items-start pb-3">
      <span class="text-lg xl:text-xl pl-5 pr-20" :style="'background: linear-gradient(to right, #F78383 , #181818)'">{{ subtitle }}</span>
      <span class="text-lg xl:text-xl pt-4 cursor-pointer" @click="overflow=!overflow">{{ overflow? "查看全部": "收起" }}</span>
    </div>
    <div :class="'w-full flex items-start mb-3 justify-start ' + (overflow? 'justify-start overflow-x-auto': 'flex-wrap')">
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
  },
  data: () => ({
    overflow: true
  })
};
</script>