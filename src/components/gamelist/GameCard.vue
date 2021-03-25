<template>
  <router-link :to="'/games/detail/' + game._id">
    <div class="flex flex-col w-250 h-170 xl:w-350 pr-8 pb-4">
      <img class="h-120 xl:h-175 object-scale-down border border-gray-800" :src="baseURL +  game.image[0]" />
      <div class="flex justify-between">
        <div class="flex items-center">
          <span class="text-md xl:text-xl mr-2 xl:mr-4">{{ game.title }}</span>
          <img v-for="(item, index) in getGenreType(game.genre)" :key="index" class="w-3 mt-1 mr-1 xl:w-4 object-scale-down xl:mt-2 xl:mr-2" :src="getTypeIcon(item)" />
        </div>
        <div class="flex items-center">
          <img class="h-3 xl:h-4 mr-2" :src="require('@/assets/images/eye-white.png')" />
          <span class="text-md xl:text-lg">{{ game.downloads}}</span>
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
      console.log('categories', categories);
      return categories.sort( (a, b) => a > b);
    },
    getTypeIcon: category => {
      switch (category) {
        case "Fitness":
          return require("@/assets/images/fitness.png");
        case "Game":
          return require("@/assets/images/game.png");
        case "Social":
          return require("@/assets/images/social.png");
      }
    }
  }
};
</script>