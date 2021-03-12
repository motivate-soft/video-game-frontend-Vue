<template>
  <div id="app" class="bg-black">
    <Nav class="bg-back w-full fixed top-0 z-50 border-b-4 border-black"/>
    <Game-List msg="Games List" class="text-center min-h-screen pt-16 xl:pt-20 z-0"/>
  </div>
</template>

<script>
import GameList from './components/GameList.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    GameList,
    Nav
  }
}
</script>