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
        <div class="w-full flex justify-between items-center p-3 px-6 border-b cursor-pointer border-gray-800" @click="filterByCategory(category.category)">
          <img :src="category.icon" class="w-8" />
          <span class="text-xl" :style="'color:' + categoryColor(category)">健身</span>
        </div>
        <span
          class="m-2 px-6 text-xl cursor-pointer w-full"
          v-for="genre in category.genres"
          :style="getStyle(genre, category)"
          :key="genre._id"
          @click="filter(genre)"
        >{{ genre.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import genres from "../../genres.json";

export default {
  name: "SortPan",
  props: {
    selected: Object
  },
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
    filter(genre) {
      this.$emit("filterByGenre", genre);
    },
    filterByCategory(category) {
      this.$emit("filterByCategory", category);
    },
    categoryColor(category) {
      if(this.selected.category.includes(category.category)) return category.color;
      else return "#7E7E7E";
    },
    getStyle(genre, category) {
      if(this.selected.genre.includes(genre._id)) return 'background: linear-gradient(to right, #181818, '+ category.color + ' , #181818)';
      else return "";
    }
  }
};
</script>