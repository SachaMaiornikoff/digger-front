<template>
  <div class="container">
    <div>
      <h1>Liste de jeu</h1>
      <ul v-for="gameImage in gamesImage">
        <GameListItem :gameImage="gameImage" />
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GameListItem from '~/components/GameListItem.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components,no-undef
    GameListItem
  },
  asyncData(context) {
    return context.store.dispatch('games/getGames')
  },
  beforeCreate() {
    axios
      .get('/games', { progress: false })
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
