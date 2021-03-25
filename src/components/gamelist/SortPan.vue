<template>
  <div class="sticky w-full" :style="'top:90px;'">
    <div v-if="collapse" class="flex flex-col w-full pr-2 items-end mr-2 pb-10">
      <img
        :src="require('@/assets/images/menu.png')"
        class="w-8 cursor-pointer"
        @click="collapse=!collapse"
      />
      <img
        v-for="category in categories"
        :key="category.category"
        :src="category.icon"
        class="w-7 p-1 mr-1 my-2 cursor-pointer"
        :style="getBorderStyle(category)"
        @click="filterByCategory(category.category)"
      />
      
    </div>
    <div v-if="!collapse" class="flex flex-col w-full pr-2 items-end shadow-2xl mr-2 pb-10">
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
        <div
          class="w-full flex justify-between items-center p-2 pl-6 border-b cursor-pointer border-gray-800"
          @click="filterByCategory(category.category)"
        >
          <img :src="category.icon" class="w-5 mr-1" />
          <span class="text-xl" :style="'color:' + categoryColor(category)">健身</span>
        </div>
        <span
          class="m-2 pl-8 text-xl cursor-pointer w-full"
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
// import genres from "../../constants/genres.json";
import GenreDataService from "../../services/GenreService"

export default {
  name: "SortPan",
  props: {
    selected: Object,
    // genres: Array
  },
  data: () => ({
    collapse: true,
    categories: [],
  }),
  mounted() {
    GenreDataService.getAll().then( respose => {
      let genres = respose.data;
      this.categories = [
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
      ];
      console.log('categories', genres);
    });
  },
  methods: {
    filter(genre) {
      this.$emit("filterByGenre", genre);
    },
    filterByCategory(category) {
      this.$emit("filterByCategory", category);
    },
    categoryColor(category) {
      if (this.selected.category.includes(category.category))
        return category.color;
      else return "#7E7E7E";
    },
    getStyle(genre, category) {
      if (this.selected.genre.includes(genre._id))
        return (
          "background: linear-gradient(to right, #181818, " +
          category.color +
          " , #181818)"
        );
      else return "";
    },
    getBorderStyle(category) {
      if (this.selected.category.includes(category.category))
        return 'border-radius:20%; border: solid 1px ' + category.color;
      else return "";
    }
  }
};
</script>