<template>
  <div class="sticky" :style="'top:90px;'">
    <div v-if="collapse" class="flex flex-col items-end mr-2 pb-10">
      <img
        :src="require('@/assets/images/menu.png')"
        class="w-8 cursor-pointer"
        @click="collapse=!collapse"
      />
      <img :src="require('@/assets/images/fitness.png')" class="w-8 my-3" />
      <img :src="require('@/assets/images/game.png')" class="w-8 my-3" />
      <img :src="require('@/assets/images/social.png')" class="w-8 my-3" />
    </div>
    <div v-if="!collapse" class="flex flex-col items-end shadow-2xl mr-2 pb-10">
      <img
        :src="require('@/assets/images/menu.png')"
        class="w-8 cursor-pointer"
        @click="collapse=!collapse"
      />
      <div
        v-for="category in categories"
        :key="category.category"
        class="w-full flex flex-col items-center"
      >
        <div class="w-full flex justify-between items-center p-3 px-6 border-b border-gray-800">
          <img :src="category.icon" class="w-8" />
          <span class="text-xl" :style="'color:' + category.color">健身</span>
        </div>
        <span
          class="p-2 px-6 text-xl cursor-pointer"
          v-for="genre in category.genres"
          :key="genre._id"
          @click="filter(genre._id)"
        >{{ genre.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import genres from "../../genres.json";

export default {
  name: "SortPan",
  data: () => ({
    collapse: true,
    categories: [
      {
        category: "fitness",
        icon: require("@/assets/images/fitness.png"),
        color: "#F4AC30",
        genres: genres.filter(item => item.type == "fitness")
      },
      {
        category: "game",
        icon: require("@/assets/images/game.png"),
        color: "#9C8BE6",
        genres: genres.filter(item => item.type == "game")
      },
      {
        category: "social",
        icon: require("@/assets/images/social.png"),
        color: "#9AEAB6",
        genres: genres.filter(item => item.type == "social")
      }
    ]
  }),
  methods: {
    filter(genre_id) {
      this.$emit("filterByGenre", genre_id);
    }
  }
};
</script>