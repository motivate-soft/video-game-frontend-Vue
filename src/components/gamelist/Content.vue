<template>
  <div>
    <div class="w-full flex text-white text-left pr-6 m-auto" :style="'max-width: 1920px'">
      <div class="flex-shrink-0 relative min-w-40 mt-12">
        <sort-pan @filterByGenre="filterByGenre" @filterByCategory="filterByCategory" :selected="selected" />
      </div>
      <div v-if="!isFiltered" class=" py-12 min-w-0 max-w-1600">
        <img :src="require('@/assets/images/example/1.png')" class="w-full pb-12" />
        <game-sublist :subtitle="'评分优先'" :items="topGames" />
        <game-sublist :subtitle="'新款崛起'" :items="newGames" />
        <game-sublist :subtitle="'好友热玩'" :items="hotGames" />
      </div>
      <div
        v-if="isFiltered"
        class="w-full flex flex-col items-end py-12 max-w-1600"
      >
        <game-filteredlist :items="filteredGames" />
        <span class="text-lg xl:text-xl pt-4 cursor-pointer" @click="showAll">查看全部</span>
      </div>
    </div>
  </div>
</template>

<script>
import GameSublist from "../gamelist/Sublist.vue";
import GameFilteredlist from "../gamelist/Filteredlist.vue";
import games from "../../constants/games.json";
import genres from "../../constants/genres.json";
import SortPan from "../gamelist/SortPan.vue";

// var categories = ['fitness', 'game', 'social'];
export default {
  name: "GamelistContent",
  components: {
    GameSublist,
    GameFilteredlist,
    SortPan
  },
  data: () => ({
    isFiltered: false,
    selected: {
      category: [],
      genre: []
    },
    games: games,
    filteredGames: [],
    topGames: [games[0], games[1]],
    newGames: [games[2], games[3], games[4], games[1]],
    hotGames: [games[1], games[2], games[3], games[4], games[5]]
  }),
  methods: {
    showAll() {
      this.selected.category = [];
      this.selected.genre = [];
    },
    filterByGenre(gen, mode="") {
      var genre = gen._id;
      var category = gen.type;

      var index = this.selected.genre.indexOf(genre);
      if (index >= 0) this.selected.genre.splice(index, 1);
      else if(mode=="") this.selected.genre.push(genre);

      if(mode==""){
        index = this.selected.category.indexOf(category);
        if (index >= 0) this.selected.category.splice(index, 1);
      }
    },
    filterByCategory(category) {
      genres.map( (item) => {
        if(item.type==category) this.filterByGenre(item, "remove");
      });
      var index = this.selected.category.indexOf(category);
      if (index >= 0) this.selected.category.splice(index, 1);
      else this.selected.category.push(category);
    }
  },
  watch: {
    selected: {
      deep: true,
      handler() {
        // console.log(this.selected);
        if (this.selected.genre.length > 0 || this.selected.category.length > 0) {
          this.isFiltered = true;
          this.filteredGames = games.filter(item =>
            this.selected.genre.includes(item.genre._id) || this.selected.category.includes(item.genre.type)
          );
          console.log("filtered", this.filteredGames);
        } else {
          this.isFiltered = false;
        }
      }
    }
  }
};
</script>