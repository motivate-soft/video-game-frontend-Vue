<template>
  <div>
    <div class="w-full flex text-white text-left px-4 m-auto" :style="'max-width: 1920px'">
      <div class="flex-shrink-0 relative w-40 mt-12">
        <sort-pan
          @filterByGenre="filterByGenre"
          @filterByCategory="filterByCategory"
          :selected="selected"
          :genres="genres"
          :collapse="true"
        />
      </div>
      <div v-if="!isFiltered" class="py-12 min-w-0 max-w-1600">
        <img :src="require('@/assets/images/example/1.png')" class="w-full pb-12" />
        <game-sublist :subtitle="'评分优先'" :items="topGames" />
        <game-sublist :subtitle="'新款崛起'" :items="newGames" />
        <game-sublist :subtitle="'好友热玩'" :items="hotGames" />
      </div>
      <div v-if="isFiltered" class="w-full flex flex-col items-end py-12 max-w-1600">
        <game-filteredlist :items="filteredGames" />
        <span class="text-lg xl:text-xl pt-4 cursor-pointer" @click="showAll">查看全部</span>
      </div>
    </div>
  </div>
</template>

<script>
import GameSublist from "../gamelist/Sublist.vue";
import GameFilteredlist from "../gamelist/Filteredlist.vue";
import GameDataService from "../../services/GameService";
import GenreDataService from "../../services/GenreService";
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
    games: [],
    genres: [],
    filteredGames: [],
    topGames: null,
    newGames: null,
    hotGames: null
  }),
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      GameDataService.getAll()
        .then(response => {
          this.games = response.data;
          this.topGames = response.data.sort((a, b) => {
            if (a.likes > b.likes) return -1;
            else return 1;
          });
          this.newGames = response.data.sort((a, b) => {
            if (a.releaseDate > b.releaseDate) return -1;
            else return 1;
          });
          this.hotGames = response.data.sort((a, b) => {
            if (a.loves > b.loves) return -1;
            else return 1;
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      GenreDataService.getAll().then(response => {
        this.genres = response.data;
      });
    },
    showAll() {
      this.selected.category = [];
      this.selected.genre = [];
    },
    filterByGenre(gen, mode = "") {
      var genre = gen._id;
      var category = gen.type;

      var index = this.selected.genre.indexOf(genre);
      if (index >= 0) this.selected.genre.splice(index, 1);
      else if (mode == "") this.selected.genre.push(genre);

      if (mode == "") {
        index = this.selected.category.indexOf(category);
        if (index >= 0) this.selected.category.splice(index, 1);
      }
    },
    filterByCategory(category) {
      this.genres.map(item => {
        if (item.type == category) this.filterByGenre(item, "remove");
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
        console.log(this.selected);
        if (
          this.selected.genre.length > 0 ||
          this.selected.category.length > 0
        ) {
          this.isFiltered = true;
          this.filteredGames = this.games.filter(
            item => {
              for(let genre of item.genre) {
                if(this.selected.genre.includes(genre._id) || this.selected.category.includes(genre.type)) return true;
              }
              return false;
            }
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