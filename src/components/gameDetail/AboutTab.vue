<template>
  <div v-if="game" class="flex flex-col">
    <span class="text-xl py-5">详情</span>
    <p class="flex-grow text-lg leading-10 pb-5" v-html="game.description"></p>
    <div class="border-t border-gray-600 pt-10 flex justify-between flex-wrap">
      <div class="flex flex-col items-start text-left">
        <span class="mb-5">{{ creationDate.title }}</span>
        <span>{{ creationDate.value }}</span>
      </div>
      <div v-for="item in statistics" :key="item.title" class="flex flex-col items-center text-center">
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
    creationDate() { return { title: "创建时间", value: new Date(this.game.releaseDate).toLocaleDateString() } },
    equipment() { return { title: "占用内存", value: this.game.size } },
    statistics() {
      return [
        // { title: "创建时间", value: new Date(this.game.releaseDate).toLocaleDateString() },
        { title: "更新时间", value: new Date(this.game.releaseDate).toLocaleDateString() },
        { title: "正在游戏", value: this.game.playtime },
        { title: "收藏人数", value: "collections" },
        { title: "主题内容", value: "冒险" },
        // { title: "占用内存", value: this.game.size },
      ]
    }
  }
};
</script>