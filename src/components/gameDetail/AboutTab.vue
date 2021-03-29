<template>
  <div v-if="game" class="flex flex-col">
    <span class="text-2xl py-5">Game Detail</span>
    <div>
      <div
        v-for="(item, index) in game.about"
        :key="index"
        class="float-left flex flex-col w-full lg:w-1/2 px-5"
      >
        <span class="text-xl py-5">{{ item.title }}</span>
        <p class="flex-grow text-md leading-10 pb-5" v-html="item.content"></p>
      </div>
    </div>
    <span class="text-2xl py-5">Reviews</span>
    <div>
      <div
        v-for="(item, index) in game.reviews"
        :key="index"
        class="float-left flex flex-col w-full lg:w-1/2 px-5"
      >
        <p class="flex-grow text-md leading-10 pb-5" v-html="item"></p>
      </div>
    </div>
    <div class="border-t border-gray-600 pt-10 flex justify-between flex-wrap">
      <div class="flex flex-col items-start text-left">
        <span class="mb-5">{{ releaseDate.title }}</span>
        <span>{{ releaseDate.value }}</span>
      </div>
      <div
        v-for="item in statistics"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <span class="mb-5">{{ item.title }}</span>
        <span>{{ item.value }}</span>
      </div>
      <div class="flex flex-col items-end text-right">
        <span class="mb-5">{{ equipment.title }}</span>
        <span>{{ equipment.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutTab",
  props: {
    game: Object
  },
  computed: {
    releaseDate() {
      return {
        title: "release date",
        value: new Date(this.game.releaseDate).toLocaleDateString()
      };
    },
    equipment() {
      return { title: "equipment", value: this.game.equipment };
    },
    // creationDate() { return { title: "创建时间", value: new Date(this.game.releaseDate).toLocaleDateString() } },
    // equipment() { return { title: "占用内存", value: this.game.size } },
    statistics() {
      return [
        { title: "platform", value: this.game.platform },
        { title: "download size", value: this.game.downloadSize },
        { title: "number of player", value: this.game.numberOfPlayer },
        { title: "play time", value: this.game.playtime }
        // { title: "占用内存", value: this.game.size },
      ];
    }
  }
};
</script>