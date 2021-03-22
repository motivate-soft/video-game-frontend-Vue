<template>
  <div id="app" class="min-h-screen bg-white text-black px-2 pt-16 xl:pt-20 z-0">
    <div class="mt-12 max-w-1600 m-auto">
        <form class="flex flex-wrap" enctype="multipart/form-data" action="/addGame" method="post">
            <div class="flex p-4 w-1/4">
                <label class="pr-4">title</label>
                <input name="title" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">image</label>
                <input name="image" type="file" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">genre</label>
                <input name="genre" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">discription</label>
                <input name="discription" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">releaseDate</label>
                <input name="releaseDate" type="date" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">contentRating</label>
                <input name="contentRating" type="number" min="0" max="5" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">numberOfPlayer</label>
                <input name="numberOfPlayer" type="number" min="0" max="5" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">size</label>
                <input name="size" type="number" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">platform</label>
                <select name="platform" class="border">
                    <option>Desktop</option>
                    <option>iPhone</option>
                    <option>mobile</option>
                </select>
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">author</label>
                <input name="author" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">source</label>
                <input name="source" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">instrunction</label>
                <input name="instrunction" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">controller</label>
                <input name="controller" class="border" />
            </div>
            <div class="flex p-4 w-1/4">
                <label class="pr-4">videos</label>
                <input name="videos[]" type="file" multiple class="border" />
            </div>
            <div class="clearfix"/>
            <button type="submit" class="border border-black rounded-sm my-4 px-4">Save</button>
        </form>
    </div>
  </div>
</template>

<script>
// import games from "../constants/games.json";
// import VideoTab from "./gameDetail/VideoTab.vue";
// import GuideTab from "./gameDetail/GuideTab.vue";
// import AboutTab from "./gameDetail/AboutTab.vue";
// import gameApi from "@/api/gameApi";

export default {
  name: "AddGamePage",
  data: () => ({
  }),
  components: {
  },
  methods: {
    
  },
  mounted() {
   
  }
};
</script>