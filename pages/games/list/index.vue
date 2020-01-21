<template>
  <div class="container">
    <input v-model="query" type="text" />
    <h1>Liste de jeu {{ query }}</h1>
    <ul class="games-container">
      <li
        v-for="(game, indexGame) in games"
        :key="indexGame"
        class="games-container-item"
      >
        <nuxt-link :to="'/games/' + game.id" class="not-underlined-link">
          <GameListItem :game="game" />
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
  data() {
    return {
      query: '',
      timer: Object
    }
  },
  computed: {
    nbRequests() {
      return this.$store.state.games.nbRequests
    }
  },
  watch: {
    query() {
      this.$store
        .dispatch('games/getGamesFiltered', this.query)
        .then((response) => {
          this.games = response.games
        })
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
