<template>
  <div class="gamelist-content">
    <Gamelist-Content class="w-full bg-back" />
    <Gamelist-Footer />
  </div>
</template>

<script>
import GamelistContent from "./gamelist/content.vue"
import GamelistFooter from "./gamelist/footer.vue"
export default {
  name: 'HelloWorld',
  components: {
    GamelistContent,
    GamelistFooter
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
