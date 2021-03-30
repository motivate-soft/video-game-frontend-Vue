<template>
  <div id="app" class="bg-black text-white min-w-1280">
    <Nav class="bg-back w-full fixed top-0 z-50 border-b-4 border-black"/>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/common/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>