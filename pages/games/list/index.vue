<template>
  <div class="container">
    <div>
      <h1>Liste de jeu {{ nbRequests }}</h1>
      <ul v-for="(gameImage, indexGame) in gamesImage" :key="indexGame">
        <nuxt-link :to="'/games/' + gameImage.game.id">
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
  computed: {
    nbRequests() {
      return this.$store.state.games.nbRequests
    }
  },
  asyncData(context) {
    return context.store.dispatch('games/getAllGames')
  },
  mounted() {
    this.$store.commit('games/incrementNbRequest')
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
