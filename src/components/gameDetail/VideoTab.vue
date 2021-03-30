<template>
  <div class="flex flex-col">
    <div v-if="game.videos.length + game.image.length > 5">
      <span class="float-right text-lg xl:text-xl pt-4 mb-6 cursor-pointer" @click="isAll=!isAll">
        {{ !isAll? "view all": "collapse" }}
      </span>
    </div>
    <div :class="'w-full flex flex-wrap items-start mb-3 justify-start'">
      <div v-for="(video, index) in game.videos" :key="'video' + index" class="w-1/4 px-4 mb-6" @click="currentVideo=video; currentImage=null">
        <div v-if="isAll || index<4" class="relative cursor-pointer w-full">
          <video :src="baseURL(video)" class="h-40 mx-auto"/>
          <div :class="'absolute flex justify-center items-center min-w-full min-h-full top-0 ' + (video!=currentVideo? ' bg-semitransparent': 'border border-gray-700')">
            <img class="w-8" :src="require('@/assets/images/play.png')"/>
          </div>
        </div>
      </div>
      <div v-for="(image, index) in game.image" :key="'image' + index" class="w-1/4 px-4 mb-6" @click="currentImage=image; currentVideo=null">
        <div v-if="isAll || (game.videos.length + index)<4" class="relative cursor-pointer w-full">
          <img :src="baseURL(image)" class="h-40 mx-auto"/>
          <div :class="'absolute flex justify-center items-center min-w-full min-h-full top-0 ' + (image!=currentImage? ' bg-semitransparent': 'border border-gray-700')">
            <!-- <img class="w-8" :src="require('@/assets/images/play.png')"/> -->
          </div>
        </div>
      </div>
    </div>
    <video v-if="currentVideo" :src="baseURL(currentVideo)" controls="true" class="max-w-full max-h-700 object-contain mt-10"/>
    <img v-if="currentImage" :src="baseURL(currentImage)" class="max-w-full max-h-700 object-contain mt-10"/>
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
  data: ()=>({
    isAll: false
  }),
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