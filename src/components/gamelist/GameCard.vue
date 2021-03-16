<template>
  <div class="flex flex-col w-250 xl:w-350 pr-4 pb-4">
    <img class="w-full" :src="require('@/assets/' + image)" />
    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="text-xl xl:text-2xl mr-2">{{ title }}</span>
        <img class="w-6 h-6" :src="getGenreIcon(genre)" />
      </div>
      <div class="flex items-center">
        <img class="w-6 h-6 mr-2" :src="require('@/assets/images/eye.png')" />
        <span class="text-sm">{{ playtime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    title: String,
    image: String,
    genre: Object,
    playtime: Number
  },
  methods: {
    getGenreIcon: genre => {
      switch (genre.type) {
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