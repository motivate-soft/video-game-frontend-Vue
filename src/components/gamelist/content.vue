<template>
  <div>
    <div
      class="w-full flex-col relative text-white text-left px-6 m-auto"
      :style="'max-width: 1920px'"
    >
      <div class="ml-40 flex flex-col py-12" :style="'max-width: 1600px'">
        <img :src="require('@/assets/images/example/1.png')" class="pb-12" />
        <game-sublist :subtitle="'评分优先'" :items="topGames"/>
        <game-sublist :subtitle="'新款崛起'" :items="newGames"/>
        <game-sublist :subtitle="'好友热玩'" :items="hotGames"/>
      </div>
      <!-- <sort-pan /> -->
    </div>
  </div>
</template>

<script>
import GameSublist from "../gamelist/sublist.vue";
import games from "../../games.json";
// import SortPan from "../gamelist/sortPan.vue";
export default {
  name: "GamelistContent",
  components: {
    GameSublist,
    // SortPan
  },
  data: function() {
    return {
      topGames: [games[0], games[1], games[2], games[3]],
      newGames: [games[2], games[3], games[4], games[1]],
      hotGames: [games[1], games[2], games[3], games[4], games[5]],
    }
  } 
};
</script>