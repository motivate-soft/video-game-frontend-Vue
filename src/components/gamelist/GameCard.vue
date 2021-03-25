<template>
  <router-link :to="'/games/detail/' + game._id">
    <div class="flex flex-col w-250 xl:w-350 pr-8 pb-4">
      <img class="w-full" :src="baseURL +  game.image" />
      <div class="flex justify-between">
        <div class="flex items-center">
          <span class="text-xl xl:text-2xl mr-4">{{ game.title }}</span>
          <img v-for="(item, index) in getGenreType(game.genre)" :key="index" class="w-4 h-4 mt-2 mr-2" :src="getTypeIcon(item)" />
        </div>
        <div class="flex items-center">
          <img class="h-4 mr-2" :src="require('@/assets/images/eye-white.png')" />
          <span class="text-lg">{{ game.playtime}}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import config from "../../constants/config";
export default {
  name: "GameCard",
  props: {
    game: Object
  },
  data: () => ({
    baseURL: ""
  }),
  mounted() {
    this.baseURL = config.baseURL;
  },
  methods: {
    getGenreType: genre => {
      let categories = [];
      for(let item of genre){
        if(!categories.find(category => category==item.type)) categories.push(item.type);
      }
      return categories.sort( (a, b) => a > b);
    },
    getTypeIcon: category => {
      switch (category) {
        case "fitness":
          return require("@/assets/images/fitness.png");
        case "game":
          return require("@/assets/images/game.png");
        case "social":
          return require("@/assets/images/social.png");
      }
    }
  }
};
</script>