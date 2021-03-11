<template>
  <div id="app" class="bg-black">
    <Nav class="mb-6 bg-back w-full fixed"/>
    <GameList msg="Games List" class="text-center min-h-screen"/>
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