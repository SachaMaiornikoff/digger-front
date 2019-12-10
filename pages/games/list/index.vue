<template>
  <div class="container">
    <h1>Liste de jeu {{ nbRequests }}</h1>
    <ul class="games-container">
      <li
        v-for="(gameImage, indexGame) in gamesImage"
        :key="indexGame"
        class="games-container-item"
      >
        <nuxt-link
          :to="'/games/' + gameImage.game.id"
          class="not-underlined-link"
        >
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
.not-underlined-link {
  color: white;
}

.container {
  display: inline-block;
  max-width: none;
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
