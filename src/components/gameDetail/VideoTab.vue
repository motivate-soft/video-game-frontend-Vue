<template>
  <div class="flex flex-col">
    <div :class="'w-full flex items-start mb-3 justify-start overflow-x-auto'">
      <div v-for="video in game.videos" :key="video" class="relative mx-6 cursor-pointer" @click="currentVideo=video">
        <video :src="require('@/assets/' + video)" class="h-40"/>
        <div :class="'absolute flex justify-center items-center min-w-full min-h-full top-0 ' + (video!=currentVideo? ' bg-semitransparent': 'border border-white')">
          <img class="w-8" :src="require('@/assets/images/play.png')"/>
        </div>
      </div>
    </div>
    <video v-if="currentVideo" :src="require('@/assets/' + currentVideo)" controls="true" class="w-full mt-10"/>
  </div>
</template>

<script>
export default {
  name: "VideoTab",
  props: {
    game: Object,
    currentVideo: null
  },
  mounted() {
    console.log(this.game.videos);
    if(this.game.videos.length > 0) this.currentVideo = this.game.videos[0];
  }
};
</script>