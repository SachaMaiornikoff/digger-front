<template>
  <div class="container">
    <div>
      <h1>Liste de jeu</h1>
      <ul v-for="gameImage in gamesImage">
        <nuxt-link :to="'/games/' + gameImage.game.id" no-prefetch>
          <GameListItem :gameImage="gameImage" />
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import GameListItem from '~/components/GameListItem.vue'

export default {
  components: {
    GameListItem
  },
  asyncData(context) {
    return context.$axios
      .get('/games')
      .then((response) => {
        return {
          gamesImage: response.data
        }
      })
      .catch((error) => console.log('There was an error : ' + error))
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
