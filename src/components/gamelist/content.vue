<template>
  <div>
    <div
      class="w-full flex-col relative text-white text-left px-6 m-auto"
      :style="'max-width: 1920px'"
    >
      <div class="ml-40 flex flex-col py-12" :style="'max-width: 1600px'">
        <img :src="require('@/assets/images/example/1.png')" class="pb-12" />
        <game-sublist />
      </div>
      <!-- <sort-pan /> -->
    </div>
  </div>
</template>

<script>
import GameSublist from "../gamelist/sublist.vue";
import SortPan from "../gamelist/sortPan.vue";
export default {
  name: "GamelistContent",
  components: {
    GameSublist,
    SortPan
  }
};
</script>