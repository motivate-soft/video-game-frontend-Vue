<template>
  <div class="w-full flex-col text-white text-left px-6 m-auto">
    <div class="flex justify-between items-start pb-3">
      <span class="text-xl xl:text-2xl">评分优先</span>
      <span class="text-lg xl:text-xl pt-4">查看全部</span>
    </div>
    <div class="flex justify-between items-start pb-3">
      <div :style="'min-height:200px'" class="w-1/4 m-3 bg-white"/>
      <div :style="'min-height:200px'" class="w-1/4 m-3 bg-white"/>
      <div :style="'min-height:200px'" class="w-1/4 m-3 bg-white"/>
      <div :style="'min-height:200px'" class="w-1/4 m-3 bg-white"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortPan"
};
</script>