<template>
  <div id="app" class="min-h-screen bg-back px-2 pt-16 xl:pt-20 z-0">
    <div v-if="game" class="mt-12 max-w-1600 m-auto">
      <div class="flex items-start w-full mb-16">
        <img :src="baseURL(game.image)" class="w-460 object-scale-down h-auto pr-5 lg:pr-8" />
        <div class="flex flex-col flex-grow">
          <div class="flex justify-between items-center mb-8">
            <span class="text-4xl flex items-center">
              <span class="mr-8">{{game.title}}</span>
              <img v-for="(item, index) in getGenreType(game.genre)" :key="index" class="w-6 h-6 mt-2 mr-2" :src="getTypeIcon(item)" />
            </span>
            <a :href="game.source" class="mr-6">
              <img :src="require('@/assets/images/download.png')" class="w-8 lg:w-10" />
            </a>
          </div>
          <div class="flex justify-between pb-6 border-b border-gray-600">
            <div class="flex">
              <span
                class="text-lg text-black bg-white rounded-full py-1 px-4 mr-6 flex justify-center items-center"
              >
                <img :src="require('@/assets/images/heart.png')" class="h-4 mr-2" />
                {{ game.loves}}
              </span>
              <span
                class="text-lg text-black bg-white rounded-full py-1 px-4 mr-6 flex justify-center items-center"
              >
                <img :src="require('@/assets/images/thumb-up.png')" class="h-4 mr-2" />
                {{ game.likes}}
              </span>
              <span
                class="text-lg text-black bg-white rounded-full py-1 px-4 flex justify-center items-center"
              >
                <img :src="require('@/assets/images/thumb-down.png')" class="h-4 mr-2" />
                {{ game.dislikes}}
              </span>
            </div>
            <span
              class="text-lg text-black bg-white rounded-full py-1 px-4 flex justify-center items-center"
            >
              <img :src="require('@/assets/images/eye.png')" class="h-4 mr-2" />
              {{ game.playtime }}
            </span>
          </div>
          <span class="text-xl py-5">详情</span>
          <p class="text-lg leading-10" v-html="game.description"></p>
        </div>
      </div>
      <div id="tabs">
        <div class="flex">
          <a
            @click="activetab=1"
            :class="'text-2xl px-12 py-3 border-b-4 border-r cursor-pointer border-black bg-' + (activetab==1? 'dark': 'light')"
          >视频</a>
          <a
            @click="activetab=2"
            :class="'text-2xl px-12 py-3 border-b-4 border-r cursor-pointer border-black bg-' + (activetab==2? 'dark': 'light')"
          >控制</a>
          <a
            @click="activetab=3"
            :class="'text-2xl px-12 py-3 border-b-4 border-r cursor-pointer border-black bg-' + (activetab==3? 'dark': 'light')"
          >关于</a>
        </div>

        <div class="content">
          <div v-if="activetab === 1" class="tabcontent">
            <video-tab class="bg-dark px-12 py-12" :game="game" />
          </div>
          <div v-if="activetab === 2" class="tabcontent">
            <guide-tab class="bg-dark px-12 py-6" :game="game" />
          </div>
          <div v-if="activetab === 3" class="tabcontent">
            <about-tab class="bg-dark px-12 py-6" :game="game" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import games from "../constants/games.json";
import VideoTab from "./gameDetail/VideoTab.vue";
import GuideTab from "./gameDetail/GuideTab.vue";
import AboutTab from "./gameDetail/AboutTab.vue";
import GameDataService from "@/services/GameService";
import config from "../constants/config";

export default {
  name: "GameDetailPage",
  data: () => ({
    // games: null,
    game: null,
    activetab: 1
  }),
  components: {
    VideoTab,
    GuideTab,
    AboutTab
  },
  methods: {
    baseURL(url) {
      return config.baseURL + url;
    },
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
    },
    getClasses: function(tabnum) {
      var classes = "text-2xl px-12 py-3 border-b-4 border-black bg-";
      console.log(this.activetab);
      if (tabnum == 1) return classes + "dark";
      else return classes + "light";
    }
  },
  mounted() {
    GameDataService.get(this.$route.params.id).then(
      response => (this.game = response.data)
    );
    
  }
};
</script>