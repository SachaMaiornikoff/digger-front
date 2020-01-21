<template>
  <div class="container">
    <h1>Liste de jeu {{ nbRequests }}</h1>
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
// eslint-disable-next-line import/named
import cloneDeep from 'lodash.clonedeep'
import GameListItem from '~/components/GameListItem.vue'

export default {
  layout: 'connected',
  data() {
    return {
      user: cloneDeep(this.$store.state.auth.user),
      pagination: {
        currentPage: 0
      }
    }
  },
  components: {
    GameListItem
  },
  asyncData(context) {
    return context.store.dispatch('games/getAllGames')
  },
  computed: {
    nbRequests() {
      return this.$store.state.games.nbRequests
    }
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
