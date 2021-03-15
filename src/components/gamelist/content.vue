<template>
  <div>
    <div class="w-full flex flex-end text-white text-left pr-6 m-auto" :style="'max-width: 1920px'">
      <div class="relative w-40 mt-12">
        <sort-pan @filterByGenre="filterByGenre" />
      </div>
      <div v-if="!isFiltered" class="flex flex-col py-12" :style="'max-width: 1600px'">
        <img :src="require('@/assets/images/example/1.png')" class="pb-12" />
        <game-sublist :subtitle="'评分优先'" :items="topGames" />
        <game-sublist :subtitle="'新款崛起'" :items="newGames" />
        <game-sublist :subtitle="'好友热玩'" :items="hotGames" />
      </div>
      <div v-if="isFiltered" class="w-full flex flex-col items-end py-12" :style="'max-width: 1600px'">
        <game-filteredlist :items="filteredGames"/>
        <span class="text-lg xl:text-xl pt-4 cursor-pointer" @click="showAll">查看全部</span>
      </div>
    </div>
  </div>
</template>

<script>
import GameSublist from "../gamelist/Sublist.vue";
import GameFilteredlist from "../gamelist/Filteredlist.vue";
import games from "../../games.json";
import SortPan from "../gamelist/SortPan.vue";
export default {
  name: "GamelistContent",
  components: {
    GameSublist,
    GameFilteredlist,
    SortPan
  },
  data: ()=>({
    isFiltered: false,
    games: games,
    filteredGames: [],
    topGames: [games[0], games[1], games[2], games[3]],
    newGames: [games[2], games[3], games[4], games[1]],
    hotGames: [games[1], games[2], games[3], games[4], games[5]]
  }),
  methods: {
    showAll() {
      this.isFiltered = false;
    },
    filterByGenre(genre_id) {
      this.isFiltered=true;
      this.filteredGames=games.filter(item => item.genre._id == genre_id);
      console.log('filtered', this.filteredGames);
    }
  }
};
</script>