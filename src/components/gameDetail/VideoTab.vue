<template>
  <div class="flex flex-col">
    <div :class="'w-full flex items-start mb-3 justify-start overflow-x-auto'">
      <div v-for="(video, index) in game.videos" :key="index" class="relative mx-6 cursor-pointer" @click="currentVideo=video; currentImage=null">
        <video :src="baseURL(video)" class="h-40"/>
        <div :class="'absolute flex justify-center items-center min-w-full min-h-full top-0 ' + (video!=currentVideo? ' bg-semitransparent': 'border border-white')">
          <img class="w-8" :src="require('@/assets/images/play.png')"/>
        </div>
      </div>
      <div v-for="(image, index) in game.image" :key="index" class="relative mx-6 cursor-pointer" @click="currentImage=image; currentVideo=null">
        <img :src="baseURL(image)" class="h-40"/>
        <div :class="'absolute flex justify-center items-center min-w-full min-h-full top-0 ' + (image!=currentImage? ' bg-semitransparent': 'border border-white')">
          <!-- <img class="w-8" :src="require('@/assets/images/play.png')"/> -->
        </div>
      </div>
    </div>
    <video v-if="currentVideo" :src="baseURL(currentVideo)" controls="true" class="max-w-full max-h-700 object-scale-down mt-10"/>
    <img v-if="currentImage" :src="baseURL(currentImage)" class="max-w-full max-h-700 object-scale-down mt-10"/>
  </div>
</template>

<script>
import config from "../../constants/config"
export default {
  name: "VideoTab",
  props: {
    game: Object,
    currentVideo: null,
    currentImage: null
  },
  methods: {
    baseURL(url) {
      return config.baseURL + url;
    }
  },
  mounted() {
    console.log(this.game.videos);
    if(this.game.videos.length > 0) this.currentVideo = this.game.videos[0];
    else if(this.game.image.length > 0) this.currentImage = this.game.image[0];
  }
};
</script>