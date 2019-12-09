<template>
  <div class="container">
    <h1>Liste de jeu {{ nbRequests }}</h1>
    <nuxt-link to="/games/create">Créer un nouveau jeu</nuxt-link>
    <ul class="games-container">
      <li
        class="games-container-item"
        v-for="(gameImage, indexGame) in gamesImage"
        :key="indexGame"
      >
        <nuxt-link :to="'/games/' + gameImage.game.id">
          <GameListItem :gameImage="gameImage" />
        </nuxt-link>
      </li>
    </ul>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.games-container {
  width: 100%;
  display: inline-block;
}

.games-container-item {
  width: 450px;
  display: inline-block;
  margin: 5px;
  border-radius: 20px;
}
</style>
